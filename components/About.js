"use client";
import { useState } from "react";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  // Button styles tuned to your original theme accent color
  const buttonStyle = {
    display: "inline-block",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    fontWeight: "500",
    transition: "0.3s",
    border: "2px solid var(--first-color)",
    backgroundColor: isHovered ? "transparent" : "var(--first-color)",
    color: isHovered ? "var(--first-color)" : "var(--body-color)",
  };

  return (
    <section className="about section" id="about">
      <span className="section__subtitle">Get To Know</span>
      <h2 className="section__title">About Me</h2>

      <div className="about__container container grid">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/am1.png" alt="About" className="about__img" />

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

      {/* Embedded Scoped CSS for About Section */}
      <style jsx>{`
        .about__container {
          row-gap: 2.5rem;
        }

        .about__img {
          width: 220px;
          border-radius: 1.5rem;
          justify-self: center;
        }

        .about__data {
          text-align: center;
        }

        .about__info {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .about__box {
          background-color: var(--container-color);
          border-radius: 0.75rem;
          padding: 0.75rem 0.5rem;
        }

        .about__icon {
          font-size: 1.5rem;
          color: var(--first-color);
          margin-bottom: 0.5rem;
        }

        .about__title {
          font-size: var(--small-font-size);
        }

        .about__subtitle {
          font-size: var(--tiny-font-size);
          color: var(--text-color-light);
        }

        .about__description {
          margin-bottom: 2rem;
        }

        /* Light theme target logic */
        :global(body.light-theme) .about__box {
          box-shadow: 0 2px 16px hsla(var(--second-hue), 48%, 8%, 0.1);
        }

        /* Isolated Mobile view breakpoint adjustments */
        @media screen and (max-width: 320px) {
          .about__info {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Medium screens layout rules */
        @media screen and (min-width: 630px) {
          .about__info {
            grid-template-columns: repeat(3, 180px);
            justify-content: center;
          }

          .about__description {
            padding: 1rem 5rem;
            width: 600px;
            margin: 0 auto 2rem auto;
          }

          .about__box {
            padding: 1.75rem 0.95rem;
          }
        }

        /* Large screens / Unchanged desktop view logic */
        @media screen and (min-width: 992px) {
          .about__container {
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            column-gap: 4rem;
          }

          .about__img {
            width: 350px;
          }

          .about__data {
            text-align: initial;
          }

          .about__info {
            justify-content: initial;
            gap: 2rem;
          }

          .about__box {
            text-align: center;
            padding: 1rem 1.25rem;
          }

          .about__description {
            padding: 0 4rem 0 0;
            margin-bottom: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
