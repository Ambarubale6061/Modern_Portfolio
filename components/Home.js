"use client";

import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">
            Hi, I&apos;m{" "}
            <span style={{ color: "#06b6d4", fontWeight: "600" }}>Ambar</span>
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
            <span style={{ color: "#06b6d4", fontWeight: "600" }}>
              solve real-world problems.
            </span>
          </p>

          <div className="home__button">
            <a
              download=""
              href="/assets/pdf/ambar-cv.pdf"
              className="button button--ghost"
            >
              Download CV
            </a>

            {/* About बटनवर हॉव्हर केल्यावर 'Download CV' सारखा ट्रान्सपरंट इफेक्ट दिसेल */}
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/perfil.png"
            alt="Profile"
            className="home__img"
          />
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
  );
}
