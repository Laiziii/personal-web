import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";

const links = [
  ["about", "About"],
  ["interests", "Interests"],
  ["projects", "Projects"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark",
  );
  const toggleRef = useRef(null);
  const navigationRef = useRef(null);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content =
      theme === "dark" ? "#141516" : "#f3f1ec";
    try {
      localStorage.setItem("azeez-theme", theme);
    } catch {
      /* Appearance works without browser storage. */
    }
  }, [theme]);
  useEffect(() => {
    if (!open) return;
    navigationRef.current?.querySelector("a")?.focus();
    function onEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    function onOutside(event) {
      if (!event.target.closest(".site-header")) setOpen(false);
    }
    document.addEventListener("keydown", onEscape);
    document.addEventListener("pointerdown", onOutside);
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.removeEventListener("pointerdown", onOutside);
    };
  }, [open]);
  return (
    <header className="site-header wrap">
      <a className="wordmark" href="#home" aria-label="Azeez Adigun home">
        azeez<span>.</span>
      </a>
      <nav
        ref={navigationRef}
        id="main-nav"
        className={`navigation ${open ? "is-open" : ""}`}
        aria-label="Main navigation"
      >
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Let’s connect <Icon name="diagonal" />
        </a>
      </nav>
      <div className="header-controls">
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Icon name={theme === "dark" ? "sun" : "moon"} />
        </button>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <Icon name="plus" className={open ? "rotated" : ""} />
        </button>
      </div>
    </header>
  );
}
