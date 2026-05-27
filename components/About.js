"use client";
import { useState } from "react";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  // Default button styles (adjust colors if your theme uses a specific accent color)
  const buttonStyle = {
    display: "inline-block",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    fontWeight: "500",
    transition: "0.3s",
    border: "2px solid var(--first-color, #4070f4)",
    backgroundColor: isHovered ? "transparent" : "var(--first-color, #4070f4)",
    color: isHovered ? "var(--first-color, #4070f4)" : "#fff",
  };

  return (
    <section className="about section" id="about">
      <span className="section__subtitle">Get To Know</span>
      <h2 className="section__title">About Me</h2>

      <div className="about__container container grid">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/img/about.jpg" alt="About" className="about__img" />

        <div className="about__data">
          <div className="about__info">
            <div className="about__box">
              <i className="bx bx-award about__icon"></i>
              <h3 className="about__title">Experience</h3>
              <span className="about__subtitle">2+ Years</span>
            </div>

            <div className="about__box">
              <i className="bx bx-briefcase-alt about__icon"></i>
              <h3 className="about__title">Clients</h3>
              <span className="about__subtitle">10+ Total</span>
            </div>

            <div className="about__box">
              <i className="bx bx-support about__icon"></i>
              <h3 className="about__title">Projects</h3>
              <span className="about__subtitle">15+ Completed</span>
            </div>
          </div>

          <div
            className="about__description"
            style={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <p>
              I am Ambar, a Software Developer who enjoys building efficient,
              scalable, and user-friendly web applications. I have hands-on
              experience in both frontend and backend technologies, and I focus
              on writing clean code and creating smooth user experiences.
            </p>
            <p>
              My journey started with curiosity about how digital products work,
              which grew into building real-world applications. I also explore
              AI-based features and try to integrate them into projects wherever
              useful.
            </p>
          </div>

          <a
            href="#contact"
            className="button about__button-contact"
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}
