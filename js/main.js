/* =========================================================
   SITE CONFIG — edit these to connect your real links.
   Leave a value empty ("") and it shows as "Coming soon".
   ========================================================= */
const SITE_CONFIG = {
  email: "adigunazeez231@gmail.com",
  // GitHub username only (not the full URL)
  githubUsername: "Laiziii",
  linkedinUrl: "https://www.linkedin.com/in/azeez-a-5645b92a2/",
  instagramUrl: "https://www.instagram.com/azeez_a_/",
  // How many GitHub repos to show (forks and archived repos are skipped)
  githubRepoLimit: 6,
};

(function () {
  "use strict";

  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Theme toggle ---------- */
  const themeBtn = document.querySelector("[data-theme-toggle]");
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeBtn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    if (themeMeta) themeMeta.setAttribute("content", theme === "dark" ? "#0d0d0c" : "#f5f3ed");
  }

  applyTheme(root.getAttribute("data-theme") || "dark");

  themeBtn.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) { /* storage unavailable */ }
  });

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.querySelector("[data-menu-toggle]");
  const nav = document.getElementById("site-nav");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  menuBtn.addEventListener("click", function () {
    setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setMenu(false);
      menuBtn.focus();
    }
  });

  /* ---------- Header border on scroll ---------- */
  const header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 8); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Active nav link ---------- */
  const navLinks = Array.from(nav.querySelectorAll('a[href^="#"]'));
  const sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          const active = a.getAttribute("href") === "#" + entry.target.id;
          a.classList.toggle("is-active", active);
          if (active) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { sectionObserver.observe(s); });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  // Stagger siblings that share a parent so groups don't pop in all at once
  const groups = new Map();
  revealEls.forEach(function (el) {
    const i = groups.get(el.parentElement) || 0;
    el.style.setProperty("--delay", Math.min(i * 0.07, 0.35) + "s");
    groups.set(el.parentElement, i + 1);
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    const revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Hero word rotator ---------- */
  const rotator = document.querySelector("[data-rotator]");
  if (rotator && !reduceMotion) {
    const words = rotator.dataset.words.split("|");
    let index = 0;
    setInterval(function () {
      if (document.hidden) return;
      rotator.classList.add("is-leaving");
      setTimeout(function () {
        index = (index + 1) % words.length;
        rotator.textContent = words[index];
        rotator.classList.remove("is-leaving");
        rotator.classList.add("is-entering");
        // force reflow so the entering state is painted before it's removed
        void rotator.offsetWidth;
        rotator.classList.remove("is-entering");
      }, 350);
    }, 2600);
  }

  /* ---------- Contact links ---------- */
  // Pulls the handle out of a profile URL, e.g. ".../in/azeez-a-123/" -> "azeez-a-123"
  function handleFromUrl(url) {
    try { return new URL(url).pathname.split("/").filter(Boolean).pop() || url; }
    catch (e) { return url; }
  }

  const contactValues = {
    email: SITE_CONFIG.email
      ? { service: "Email", href: "mailto:" + SITE_CONFIG.email, label: SITE_CONFIG.email }
      : null,
    github: SITE_CONFIG.githubUsername
      ? { service: "GitHub", href: "https://github.com/" + encodeURIComponent(SITE_CONFIG.githubUsername), label: "@" + SITE_CONFIG.githubUsername }
      : null,
    linkedin: SITE_CONFIG.linkedinUrl
      ? { service: "LinkedIn", href: SITE_CONFIG.linkedinUrl, label: "Azeez Adigun" }
      : null,
    instagram: SITE_CONFIG.instagramUrl
      ? { service: "Instagram", href: SITE_CONFIG.instagramUrl, label: "@" + handleFromUrl(SITE_CONFIG.instagramUrl) }
      : null,
  };

  // Fills both the contact rows (logo + handle) and the footer logo buttons
  document.querySelectorAll("[data-contact]").forEach(function (link) {
    const value = contactValues[link.dataset.contact];
    const labelEl = link.querySelector(".contact-value");
    if (value) {
      link.href = value.href;
      link.setAttribute("aria-label", value.service + ": " + value.label);
      link.title = value.service;
      if (labelEl) labelEl.textContent = value.label;
      if (!value.href.startsWith("mailto:")) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
    } else if (labelEl) {
      link.removeAttribute("href");
      link.classList.add("is-disabled");
      link.setAttribute("aria-disabled", "true");
    } else {
      link.closest("li").remove();
    }
  });

  /* ---------- GitHub repositories ---------- */
  const ghGrid = document.querySelector("[data-github-grid]");
  const ghLink = document.querySelector("[data-github-link]");
  const ghUser = SITE_CONFIG.githubUsername;

  if (ghGrid && ghUser) {
    ghLink.href = "https://github.com/" + encodeURIComponent(ghUser);
    ghLink.target = "_blank";
    ghLink.rel = "noopener noreferrer";
    ghLink.hidden = false;

    fetch("https://api.github.com/users/" + encodeURIComponent(ghUser) + "/repos?sort=updated&per_page=50")
      .then(function (res) {
        if (!res.ok) throw new Error("GitHub responded " + res.status);
        return res.json();
      })
      .then(function (repos) {
        const picked = repos
          .filter(function (r) { return !r.fork && !r.archived; })
          .slice(0, SITE_CONFIG.githubRepoLimit);
        if (!picked.length) return; // keep the "nothing public yet" message
        ghGrid.replaceChildren.apply(ghGrid, picked.map(renderRepo));
      })
      .catch(function () {
        // Leave the default message in place; the profile link still works.
      });
  }

  // Built with textContent so repo names/descriptions can't inject markup
  function renderRepo(repo) {
    const a = document.createElement("a");
    a.className = "repo";
    a.href = repo.html_url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const name = document.createElement("span");
    name.className = "repo-name";
    name.textContent = repo.name;

    const desc = document.createElement("p");
    desc.className = "repo-desc";
    desc.textContent = repo.description || "No description yet.";

    const meta = document.createElement("span");
    meta.className = "repo-meta mono";
    const updated = new Date(repo.updated_at).toLocaleDateString(undefined, { year: "numeric", month: "short" });
    meta.textContent = [repo.language, "Updated " + updated].filter(Boolean).join(" · ");

    a.append(name, desc, meta);
    return a;
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
