"use client";
import { useState } from "react";

const aboutStyles = `
/*=============== ABOUT ===============*/
.about__container {
  row-gap: 2.5rem;
}

.about__img-wrapper {
  justify-self: center;
  width: fit-content;
  padding: 1.25rem;
  border-radius: 2rem;
  background: linear-gradient(
    145deg,
    var(--container-color),
    color-mix(in srgb, var(--container-color) 85%, var(--first-color) 15%)
  );
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
  transition: background 0.4s ease, box-shadow 0.4s ease;
  display: inline-block; /* Fixed: Added to allow proper transform mapping */
}

body.light-theme .about__img-wrapper {
  background: linear-gradient(
    145deg,
    #ffffff,
    color-mix(in srgb, var(--container-color) 90%, var(--first-color) 10%)
  );
  box-shadow: 0 12px 30px hsla(var(--second-hue), 48%, 8%, 0.12);
}

.about__img {
  display: block;
  width: 280px; /* Increased size */
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15); /* Premium shadow */
  border: 4px solid var(--container-color); /* Premium border effect */
  transform: rotate(-4deg) scale(0.96);
  transition: transform 0.25s ease; /* वेगवान केला (0.45s वरून 0.25s केला) */
  backface-visibility: hidden; /* Fixed: Prevents jittering during animation */
}

.about__img-wrapper:hover .about__img {
  transform: rotate(0deg) scale(1) !important; /* Fixed: Added !important to enforce state change */
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
  background-color: color-mix(in srgb, var(--container-color) 90%, black 10%);
  border-radius: 0.75rem;
  padding: 0.75rem 0.5rem;
  transition: background-color 0.3s ease; /* फक्त बॅकग्राउंड ट्रान्झिशन */
}

body.light-theme .about__box {
  background-color: color-mix(in srgb, var(--container-color) 95%, black 5%);
}

/* कर्सर नेल्यावर फक्त बॉक्स ट्रान्सपरंट होईल, मजकूर गडदच राहील */
.about__box:hover {
  background-color: rgba(255, 255, 255, 0.05); /* डार्क थीमसाठी ट्रान्सपरंट बॅकग्राउंड */
}

body.light-theme .about__box:hover {
  background-color: rgba(0, 0, 0, 0.03); /* लाईट थीमसाठी ट्रान्सपरंट बॅकग्राउंड */
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
}

.about__description {
  margin-bottom: 2rem;
}

/*========== Light theme overrides: About ==========*/
.light-theme .about__box {
  box-shadow: 0 2px 16px hsla(var(--second-hue), 48%, 8%, 0.1);
}

/*=============== ABOUT BREAKPOINTS ===============*/
@media screen and (max-width: 320px) {
  .about__info {
    grid-template-columns: repeat(2, 1fr);
  }
}

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

@media screen and (min-width: 992px) {
  .about__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 4rem;
  }

  .about__img {
    width: 400px; /* Increased size for desktop */
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
`;

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    display: "inline-block",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    fontWeight: "500",
    transition: "0.3s",
    border: "2px solid var(--first-color, #2563eb)",
    backgroundColor: isHovered ? "transparent" : "var(--first-color, #2563eb)",
    color: isHovered ? "var(--first-color, #2563eb)" : "#fff",
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: aboutStyles }} />
      <section className="about section" id="about">
        <span className="section__subtitle">Get To Know</span>
        <h2 className="section__title">About Me</h2>

        <div className="about__container container grid">
          <div className="about__img-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/am1.png" alt="About" className="about__img" />
          </div>

          <div className="about__data">
            <div className="about__info">
              <div className="about__box">
                <i className="bx bx-badge-check about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">2+ Years Working</span>
              </div>

              <div className="about__box">
                <i className="bx bx-group about__icon"></i>
                <h3 className="about__title">Clients</h3>
                <span className="about__subtitle">10+ Happy Clients</span>
              </div>

              <div className="about__box">
                <i className="bx bx-rocket about__icon"></i>
                <h3 className="about__title">Projects</h3>
                <span className="about__subtitle">15+ Projects</span>
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
                experience in both frontend and backend technologies, and I
                focus on writing clean code and creating smooth user
                experiences.
              </p>
              <p>
                My journey started with curiosity about how digital products
                work, which grew into building real-world applications. I also
                explore AI-based features and try to integrate them into
                projects wherever useful.
              </p>
            </div>

            <a
              href="#contact"
              className="button about__button-contact"
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
