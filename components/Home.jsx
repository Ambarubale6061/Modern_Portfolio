"use client";

import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const homeStyles = `
/*=============== HOME ===============*/
.home__container {
  position: relative;
  row-gap: 4.5rem;
  padding-top: 2rem;
}

.home__data {
  text-align: center;
}

.home__greeting,
.home__education {
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
}

.home__greeting {
  display: block;
  color: var(--title-color);
  margin-bottom: 0.25rem;
}

.home__education {
  color: var(--text-color);
  margin-bottom: 2.5rem;
}

.home__name {
  font-size: var(--biggest-font-size);
  color: var(--first-color);
}

.home__img {
  width: 220px; 
}

.home__handle {
  justify-self: center;
  width: 190px;
  height: 293px;
  background: linear-gradient(
    180deg,
    hsla(var(--first-hue), var(--sat), var(--lig), 0.5),
    hsla(var(--first-hue), var(--sat), var(--lig), 0.1)
  );
  border-radius: 10rem 10rem 1rem 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
}

/* ── Button row ── */
.home__button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.home__button .button {
  border: 2px solid transparent;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.home__button .button:not(.button--ghost):hover {
  background-color: transparent !important;
  color: var(--first-color) !important;
  border-color: var(--first-color);
}

.home__button .button--ghost {
  background-color: transparent;
  color: var(--first-color);
  border: 2px solid var(--first-color);
}

.home__button .button--ghost:hover {
  background-color: var(--first-color);
  color: #fff;
}

/* ── Socials & scroll indicator ── */
.home__social,
.home__scroll {
  position: absolute;
}

.home__social {
  bottom: 4rem;
  left: 0;
  display: grid;
  row-gap: 0.5rem;
}

.home__social-link {
  width: max-content;
  background-color: var(--container-color);
  color: var(--first-color);
  padding: 0.25rem;
  border-radius: 0.5rem;
  display: flex;
  font-size: 1rem;
  transition: background-color 0.4s ease, color 0.4s ease, box-shadow 0.4s ease;
}

.home__social-link:hover {
  background-color: var(--first-color);
  color: #ffffff;
}

.home__social::after {
  content: "";
  width: 32px;
  height: 1px;
  background-color: var(--first-color);
  transform: rotate(90deg) translate(16px, 4px);
}

.home__scroll {
  color: var(--first-color);
  right: -1.5rem;
  bottom: 4rem;
  display: grid;
  row-gap: 2.25rem;
  justify-items: center;
}

.home__scroll-icon {
  font-size: 1.25rem;
}

.home__scroll-name {
  font-size: var(--smaller-font-size);
  transform: rotate(-90deg);
}

/*========== Light theme overrides: Home ==========*/
.light-theme .home__social-link {
  box-shadow: 0 2px 16px hsla(var(--second-hue), 48%, 8%, 0.1);
}

.light-theme .home__social::after {
  background-color: var(--title-color);
}

.light-theme .home__social-link,
.light-theme .home__scroll {
  color: var(--title-color);
}

/*=============== HOME BREAKPOINTS ===============*/
@media screen and (max-width: 320px) {
  .home__button { flex-direction: column; }
  .home__handle { width: 170px; height: 280px; }
  .home__img { width: 220px; } /* मोबाईलसाठी इमेजची साईज वाढवली */
}

@media screen and (min-width: 992px) {
  .home__handle { width: 290px; height: 400px; }
  .home__img { width: 380px; } 
  .home__social-link { padding: 0.4rem; font-size: 1.25rem; }
  .home__social::after { transform: rotate(90deg) translate(16px, -1px); }
  .home__scroll-icon { font-size: 2rem; }
}
`;

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: homeStyles }} />
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <span className="home__greeting">
              Hi, I&apos;m{" "}
              <span style={{ color: "#2563eb", fontWeight: "600" }}>Ambar</span>
            </span>

            <h1
              className="home__name"
              style={{
                whiteSpace: "pre-line",
                lineHeight: "1.1",
                margin: "1rem 0",
              }}
            >
              <TypeAnimation
                sequence={[
                  "FULL STACK\nDEVELOPER",
                  2400,
                  "AI BUILDER",
                  2000,
                  "PROBLEM\nSOLVER",
                  2400,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                cursor={true}
              />
            </h1>

            <p
              className="home__description"
              style={{
                marginBottom: "2.5rem",
                fontSize: "var(--small-font-size)",
                color: "var(--text-color)",
                lineHeight: "1.5",
              }}
            >
              Crafting fast, scalable web apps and AI experiences that{" "}
              <span style={{ color: "#2563eb", fontWeight: "600" }}>
                solve real-world problems.
              </span>
            </p>

            <div className="home__button">
              <a
                download=""
                href="/Resume.pdf"
                className="button button--ghost"
              >
                Download CV
              </a>
              <a
                href="#about"
                className="button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  backgroundColor: isHovered
                    ? "transparent"
                    : "var(--first-color)",
                  color: isHovered ? "var(--text-color)" : "#fff",
                  borderColor: isHovered ? "var(--text-color)" : "transparent",
                  borderStyle: "solid",
                  borderWidth: "2px",
                  transition: "all 0.3s ease",
                }}
              >
                About
              </a>
            </div>
          </div>

          <div className="home__handle">
            <img src="/ambarh.png" alt="Profile" className="home__img" />
          </div>

          <div className="home__social">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="home__social-link"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="home__social-link"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="home__social-link"
            >
              <i className="bx bxl-dribbble"></i>
            </a>
          </div>

          <a href="#about" className="home__scroll">
            <i className="bx bx-mouse home__scroll-icon"></i>
            <span className="home__scroll-name">Scroll Down</span>
          </a>
        </div>
      </section>
    </>
  );
}
