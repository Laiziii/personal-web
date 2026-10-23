import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

async function openSite(page) {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Azeez Adigun.",
  );
}

test("introduces Azeez and links to verified project repositories", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await openSite(page);
  await expect(page).toHaveTitle(/Azeez Adigun/);
  await expect(
    page.getByRole("heading", { name: "Brock University" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "View Notify source on GitHub" }),
  ).toHaveAttribute("href", "https://github.com/Laiziii/Notify");
  await expect(
    page.getByRole("link", {
      name: "View Tic-tac-toe, with a twist source on GitHub",
    }),
  ).toHaveAttribute("href", "https://github.com/Laiziii/Tic-tac-toe");
  const brokenAnchors = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links
        .filter(
          (link) => link.hash && !document.getElementById(link.hash.slice(1)),
        )
        .map((link) => link.hash),
    );
  expect(brokenAnchors).toEqual([]);
  expect(errors).toEqual([]);
});

test("interest tabs show the relevant personal details and support keyboard navigation", async ({
  page,
}) => {
  await openSite(page);
  const panel = page.getByRole("tabpanel");
  await page.getByRole("tab", { name: "Gaming", exact: true }).click();
  await expect(panel).toContainText("Loba");
  await page
    .getByRole("tab", { name: "Artificial intelligence", exact: true })
    .click();
  await expect(panel).toContainText("ChatGPT, Codex");
  await page.getByRole("tab", { name: "Technology", exact: true }).focus();
  await page.keyboard.press("ArrowDown");
  await expect(
    page.getByRole("tab", { name: "Artificial intelligence", exact: true }),
  ).toBeFocused();
  await expect(panel).toContainText("Learning by making.");
  await page.keyboard.press("End");
  await expect(panel).toContainText("Toastmasters");
  await page.keyboard.press("Home");
  await expect(panel).toContainText("Ryzen 7 5700X");
});

test("academic summaries expand without presenting the proposal as a completed study", async ({
  page,
}) => {
  await openSite(page);
  const summary = page
    .locator("summary")
    .filter({ hasText: "Physical activity" });
  await summary.click();
  await expect(
    page.getByText("This academic proposal", { exact: false }),
  ).toBeVisible();
  await expect(
    page.getByText("This academic proposal", { exact: false }),
  ).toContainText("a proposed study");
  await summary.click();
  await expect(
    page.getByText("This academic proposal", { exact: false }),
  ).toBeHidden();
});

test("appearance preference survives reload", async ({ page }) => {
  await openSite(page);
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Switch to light mode" }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.getByRole("button", { name: "Switch to dark mode" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("appearance still works when browser storage is blocked", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new DOMException("Blocked", "SecurityError");
      },
    });
  });
  await openSite(page);
  await page.getByRole("button", { name: "Switch to light mode" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("mobile navigation closes on Escape and after selecting a section", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await openSite(page);
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toBeFocused();
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Interests", exact: true })
    .click();
  await expect(page).toHaveURL(/#interests$/);
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toHaveAttribute("aria-expanded", "false");
});

test("copies the approved GitHub contact link", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await openSite(page);
  await page.getByRole("button", { name: "Copy profile link" }).click();
  await expect(page.getByRole("status")).toContainText(
    "copied to your clipboard",
  );
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "https://github.com/Laiziii",
  );
});

test("offers a manual copy path when clipboard access is denied", async ({
  page,
}) => {
  await openSite(page);
  await page.evaluate(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: () => Promise.reject(new Error("Denied")) },
      configurable: true,
    });
  });
  await page.getByRole("button", { name: "Copy profile link" }).click();
  await expect(page.getByRole("status")).toContainText(
    "https://github.com/Laiziii",
  );
});

for (const theme of ["dark", "light"]) {
  test(`no horizontal overflow at nine screen widths in ${theme} mode`, async ({
    page,
  }) => {
    await openSite(page);
    if (theme === "light")
      await page.getByRole("button", { name: "Switch to light mode" }).click();
    for (const width of [320, 375, 390, 600, 650, 768, 900, 1024, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      const dimensions = await page.evaluate(() => ({
        viewport: innerWidth,
        content: document.documentElement.scrollWidth,
      }));
      expect(dimensions.content, `overflow at ${width}px`).toBeLessThanOrEqual(
        dimensions.viewport,
      );
    }
  });
  for (const width of [390, 1440]) {
    test(`automated accessibility scan at ${width}px in ${theme} mode`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 1000 });
      await openSite(page);
      if (theme === "light")
        await page
          .getByRole("button", { name: "Switch to light mode" })
          .click();
      await page.evaluate(() => document.fonts.ready);
      const result = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(result.violations).toEqual([]);
    });
  }
}
