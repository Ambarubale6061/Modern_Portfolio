"use client";

import { useEffect } from "react";
import {
  navigateToSection,
  scrollToPathOnLoad,
  setupPopStateSync,
  syncUrlForSection,
} from "@/lib/scrollNav";

const headerStyles = `
/*=============== HEADER & NAV ===============*/
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--body-color);
  z-index: var(--z-fixed);
  overflow: hidden;
  transition:
    background-color 0.4s ease,
    box-shadow 0.4s ease;
}

.nav {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

/*
  Logo: 1.4rem — साईज वाढवली आहे
  font-weight bumped to semibold for a stronger wordmark feel.
*/
.nav__logo {
  color: var(--first-color);
  font-size: 1.4rem; 
  font-weight: var(--font-semibold);
  letter-spacing: 0.01em;
  line-height: 1;
  transition: color 0.4s ease;
}

/* "Am" — white in dark theme */
.nav__logo-am {
  color: #ffffff;
  transition: color 0.4s ease;
}

/* "Am" — black in light theme */
.light-theme .nav__logo-am {
  color: #0f172a;
}

/* Hover: whole logo shifts to alt-blue */
.nav__logo:hover {
  color: var(--first-color-alt);
}

.nav__logo:hover .nav__logo-am {
  color: var(--first-color-alt);
}

.nav__menu {
  position: fixed;
  bottom: 1rem;
  background-color: hsla(var(--second-hue), 32%, 16%, 0.8);
  width: 90%;
  border-radius: 4rem;
  padding: 1rem 2.25rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition:
    background-color 0.4s ease,
    box-shadow 0.4s ease;
}

.nav__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__link {
  color: var(--text-color);
  font-size: 1.25rem;
  padding: 0.4rem;
  font-weight: var(--font-medium);
  text-decoration: none;
  transition:
    color 0.4s ease,
    background 0.4s ease;
  display: flex;
  border-radius: 5rem;
}

.active-link {
  background: linear-gradient(
    180deg,
    hsla(var(--first-hue), var(--sat), var(--lig), 0.5),
    hsla(var(--first-hue), var(--sat), var(--lig), 0.2)
  );
  box-shadow: 0 0 16px hsla(var(--first-hue), var(--sat), var(--lig), 0.4);
  border-radius: 5rem;
  color: var(--title-color);
}

.scroll-header {
  box-shadow: 0 4px 4px hsla(0, 0%, 4%, 0.3);
}

/*========== Light theme overrides: Header ==========*/
.light-theme .header {
  background-color: var(--body-color);
}

.light-theme .scroll-header {
  box-shadow: 0 2px 4px hsla(0, 0%, 1%, 0.1);
}

.light-theme .nav__menu {
  background-color: hsla(var(--second-hue), 30%, 96%, 0.85);
  box-shadow: 0 4px 24px hsla(var(--second-hue), 48%, 8%, 0.1);
}

/*=============== HEADER BREAKPOINTS ===============*/
@media screen and (max-width: 320px) {
  .nav__menu {
    padding: 1rem 1.5rem;
  }
}

@media screen and (min-width: 630px) {
  .nav__menu {
    width: 328px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}

@media screen and (min-width: 992px) {
  .nav {
    height: calc(var(--header-height) + 1rem);
    overflow: hidden;
  }

  .nav__logo {
    font-size: 1.5rem; /* स्क्रीन मोठी असताना थोडी अजून वाढवली */
  }
}
`;

export default function Header() {
  useEffect(() => {
    const header = document.getElementById("header");

    /*=============== CHANGE BACKGROUND HEADER ===============*/
    const scrollHeader = () => {
      if (window.scrollY >= 50) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };
    window.addEventListener("scroll", scrollHeader);

    /*=============== SCROLL SECTIONS ACTIVE LINK + URL SYNC ===============*/
    const sections = document.querySelectorAll("section[id]");

    const scrollActive = () => {
      const scrollY = window.pageYOffset;
      let currentSectionId = null;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const isInView =
          scrollY > sectionTop && scrollY <= sectionTop + sectionHeight;

        if (isInView) {
          currentSectionId = sectionId;
        }

        const navLink = document.querySelector(
          `.nav__menu a[href*=${sectionId}]`,
        );

        if (!navLink) return;

        if (isInView) {
          navLink.classList.add("active-link");
        } else {
          navLink.classList.remove("active-link");
        }
      });

      // Keep the URL in sync with whichever section is currently in view.
      if (currentSectionId) {
        syncUrlForSection(currentSectionId);
      }
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

    /*=============== HASH-FREE URL SYNC ===============*/
    // On first mount, if the URL already points at a section (e.g. /about
    // from a refresh or shared link), jump straight to it.
    scrollToPathOnLoad();
    const cleanupPopState = setupPopStateSync();

    return () => {
      window.removeEventListener("scroll", scrollHeader);
      window.removeEventListener("scroll", scrollActive);
      themeButton.removeEventListener("click", handleThemeToggle);
      cleanupPopState();
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: headerStyles }} />
      <header className="header" id="header">
        <nav className="nav container">
          <a
            href="/"
            className="nav__logo"
            onClick={(e) => navigateToSection(e, "home")}
          >
            <span className="nav__logo-am">Am</span>bar
          </a>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="/home"
                  className="nav__link"
                  onClick={(e) => navigateToSection(e, "home")}
                >
                  <i className="bx bx-home"></i>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="/about"
                  className="nav__link"
                  onClick={(e) => navigateToSection(e, "about")}
                >
                  <i className="bx bx-user"></i>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="/skills"
                  className="nav__link"
                  onClick={(e) => navigateToSection(e, "skills")}
                >
                  <i className="bx bx-book"></i>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="/work"
                  className="nav__link"
                  onClick={(e) => navigateToSection(e, "work")}
                >
                  <i className="bx bx-briefcase-alt-2"></i>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="/experience"
                  className="nav__link"
                  onClick={(e) => navigateToSection(e, "experience")}
                >
                  <i className="bx bx-time-five"></i>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="/contact"
                  className="nav__link"
                  onClick={(e) => navigateToSection(e, "contact")}
                >
                  <i className="bx bx-message-square-dots"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Theme toggle button */}
          <i className="bx bx-moon change-theme" id="theme-button"></i>
        </nav>
      </header>
    </>
  );
}
