"use client";

import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const header = document.getElementById("header");

    /*=============== CHANGE BACKGROUND HEADER ===============*/
    const scrollHeader = () => {
      if (window.scrollY >= 50) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };
    window.addEventListener("scroll", scrollHeader);

    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    const sections = document.querySelectorAll("section[id]");

    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const navLink = document.querySelector(
          `.nav__menu a[href*=${sectionId}]`,
        );

        if (!navLink) return;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add("active-link");
        } else {
          navLink.classList.remove("active-link");
        }
      });
    };
    window.addEventListener("scroll", scrollActive);

    /*=============== LIGHT / DARK THEME ===============*/
    const themeButton = document.getElementById("theme-button");
    const lightTheme = "light-theme";
    const iconTheme = "bx-sun";

    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    const getCurrentTheme = () =>
      document.body.classList.contains(lightTheme) ? "dark" : "light";
    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

    // Restore saved preference
    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        lightTheme,
      );
      themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
        iconTheme,
      );
    }

    const handleThemeToggle = () => {
      document.body.classList.toggle(lightTheme);
      themeButton.classList.toggle(iconTheme);
      localStorage.setItem("selected-theme", getCurrentTheme());
      localStorage.setItem("selected-icon", getCurrentIcon());
    };

    themeButton.addEventListener("click", handleThemeToggle);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
      window.removeEventListener("scroll", scrollActive);
      themeButton.removeEventListener("click", handleThemeToggle);
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Ambar
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="bx bx-home"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="bx bx-user"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="bx bx-book"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className="bx bx-briefcase-alt-2"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#experience" className="nav__link">
                <i className="bx bx-time-five"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="bx bx-message-square-dots"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Theme toggle button */}
        <i className="bx bx-moon change-theme" id="theme-button"></i>
      </nav>
    </header>
  );
}
