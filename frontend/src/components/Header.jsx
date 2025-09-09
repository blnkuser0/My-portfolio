import React, { useEffect, useState } from "react";
import "../index.css";
import api from "../api/api";

const submitForm = async (formData) => {
  try {
    const response = await api.post("/contact", formData);
    console.log("Message sent:", response.data);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};


export default function Header() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // NEW: for burger menu

  // Theme toggle
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="header-brand">Charl.Dev</div>

      {/* Hamburger Button */}
      <button
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <nav
        className={`header-nav ${menuOpen ? "show" : ""}`}
        aria-label="Primary navigation"
      >
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

        {/* Theme toggle */}
        <button
          aria-label="Toggle theme"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-pressed={theme === "light"}
        >
          <input
            type="checkbox"
            readOnly
            aria-hidden
            tabIndex={-1}
            checked={theme === "light"}
          />
          <span
            className="knob"
            style={{
              transform:
                theme === "light" ? "translateX(22px)" : "translateX(0)",
            }}
          />
        </button>
      </nav>
    </header>
  );
}
