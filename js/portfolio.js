/* =========================================================
   Portfolio rendering — reads window.PROJECTS (js/projects.js)
   - index.html:   [data-portfolio] grid with area filters
   - project.html: [data-project] detail page, chosen by ?id=
   ========================================================= */
(function () {
  "use strict";

  const projects = window.PROJECTS || [];

  // Small DOM helper; text always goes through textContent
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function courseLine(p) {
    return [p.course, p.term].filter(Boolean).join(" · ");
  }

  /* ---------- Grid on the home page ---------- */
  const grid = document.querySelector("[data-portfolio]");
  const filterBar = document.querySelector("[data-portfolio-filters]");

  if (grid) {
    const areas = Array.from(new Set(projects.map(function (p) { return p.area; })));
    let active = "All";

    function renderFilters() {
      filterBar.replaceChildren();
      ["All"].concat(areas).forEach(function (area) {
        const count = area === "All" ? projects.length : projects.filter(function (p) { return p.area === area; }).length;
        const btn = el("button", "chip");
        btn.type = "button";
        btn.setAttribute("aria-pressed", String(area === active));
        btn.append(el("span", null, area), el("span", "chip-count", String(count)));
        btn.addEventListener("click", function () {
          active = area;
          renderFilters();
          renderGrid();
        });
        filterBar.append(btn);
      });
    }

    function renderCard(p) {
      const a = el("a", "work-card");
      a.href = "project.html?id=" + encodeURIComponent(p.id);

      const top = el("div", "work-top");
      top.append(el("span", "work-area mono", p.area));
      if (p.pdf) top.append(el("span", "work-badge mono", "PDF"));

      const foot = el("div", "work-foot");
      foot.append(el("span", "mono", courseLine(p) || p.type));
      const arrow = el("span", "work-arrow", "→");
      arrow.setAttribute("aria-hidden", "true");
      foot.append(arrow);

      a.append(top, el("h3", "work-title", p.title), el("p", "work-summary", p.summary), foot);
      return a;
    }

    function renderGrid() {
      const shown = active === "All" ? projects : projects.filter(function (p) { return p.area === active; });
      grid.replaceChildren.apply(grid, shown.map(function (p) {
        const li = el("li");
        li.append(renderCard(p));
        return li;
      }));
    }

    renderFilters();
    renderGrid();
  }

  /* ---------- Detail page ---------- */
  const detail = document.querySelector("[data-project]");

  if (detail) {
    const id = new URLSearchParams(location.search).get("id");
    const index = projects.findIndex(function (p) { return p.id === id; });
    const p = projects[index];

    if (!p) {
      detail.replaceChildren(
        el("p", "eyebrow", "Not found"),
        el("h1", "project-title", "That project doesn't exist."),
        (function () { const a = el("a", "btn btn-ghost", "Back to all projects"); a.href = "index.html#projects"; return a; })()
      );
      return;
    }

    document.title = p.title + " · Azeez Adigun";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", p.summary);

    // Header
    const head = el("header", "project-head reveal");
    head.append(
      el("p", "eyebrow", [p.course, p.courseName].filter(Boolean).join(" · ") || p.type),
      el("h1", "project-title", p.title),
      el("p", "project-lead", p.summary)
    );

    // Body sections
    const body = el("div", "project-body");
    p.sections.forEach(function (s) {
      const sec = el("section", "project-section reveal");
      sec.append(el("h2", "project-h2", s.heading));
      if (s.text) sec.append(el("p", null, s.text));
      if (s.list) {
        const ul = el("ul", "project-list");
        s.list.forEach(function (item) { ul.append(el("li", null, item)); });
        sec.append(ul);
      }
      body.append(sec);
    });

    // Side panel
    const aside = el("aside", "project-aside reveal");
    aside.setAttribute("aria-label", "Project details");
    const dl = el("dl", "project-facts");
    [["Course", p.course], ["Term", p.term], ["Type", p.type], ["Format", { Solo: "Individual", Group: "Group project" }[p.format] || p.format], ["Area", p.area]]
      .filter(function (row) { return row[1]; })
      .forEach(function (row) {
        const div = el("div");
        div.append(el("dt", null, row[0]), el("dd", null, row[1]));
        dl.append(div);
      });
    aside.append(el("p", "card-kicker mono", "At a glance"), dl);

    if (p.tools && p.tools.length) {
      const tags = el("ul", "tags");
      tags.setAttribute("aria-label", "Methods and tools");
      p.tools.forEach(function (t) { tags.append(el("li", null, t)); });
      aside.append(el("p", "card-kicker mono", "Methods & tools"), tags);
    }

    if (p.pdf) {
      const dlBtn = el("a", "btn btn-primary project-download");
      dlBtn.href = p.pdf;
      dlBtn.setAttribute("download", "");
      dlBtn.append(el("span", null, "Download the full PDF"), el("span", null, "↓"));
      const view = el("a", "link-arrow", "Open in a new tab ");
      view.href = p.pdf;
      view.target = "_blank";
      view.rel = "noopener";
      view.append((function () { const s = el("span", null, "↗"); s.setAttribute("aria-hidden", "true"); return s; })());
      aside.append(dlBtn, view);
    } else if (p.privateNote) {
      aside.append(el("p", "project-note", p.privateNote));
    }

    const layout = el("div", "project-layout");
    layout.append(body, aside);

    // Previous / next
    const nav = el("nav", "project-pager");
    nav.setAttribute("aria-label", "More projects");
    [[index - 1, "Previous"], [index + 1, "Next"]].forEach(function (pair) {
      const other = projects[pair[0]];
      if (!other) { nav.append(el("span")); return; }
      const a = el("a", "pager-link" + (pair[1] === "Next" ? " pager-next" : ""));
      a.href = "project.html?id=" + encodeURIComponent(other.id);
      a.append(el("span", "mono", pair[1]), el("span", "pager-title", other.title));
      nav.append(a);
    });

    detail.replaceChildren(head, layout, nav);

    // Show the page content right away instead of waiting on the scroll-reveal observer
    detail.querySelectorAll(".reveal").forEach(function (node) { node.classList.add("is-visible"); });
  }
})();
