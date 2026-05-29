"use client";
import React from "react";

const experienceStyles = `
/*=============== EXPERIENCE ===============*/
.experience__container {
  max-width: 700px;
  margin: 0 auto;
  padding-top: 1rem;
  display: grid;
  row-gap: 1.5rem;
}

.experience__card {
  background-color: var(--container-color);
  border-radius: 1.25rem;
  padding: 1.5rem;
  border-left: 3px solid var(--first-color);
  transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1),
              box-shadow 0.35s ease;
  position: relative;
  overflow: hidden;
}

.experience__card:hover {
  transform: translateY(-6px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.experience__header {
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 0.75rem;
  position: relative;
}

.experience__img-box {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid hsla(var(--first-hue), var(--sat), var(--lig), 0.2);
  background-color: var(--body-color);
}

.experience__thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.experience__icon {
  font-size: 1.5rem;
  color: var(--first-color);
}

.experience__info {
  flex: 1;
}

.experience__title {
  font-size: var(--h3-font-size);
  font-weight: var(--font-semibold);
  color: var(--title-color);
  margin-bottom: 0.15rem;
}

.experience__company {
  font-size: var(--small-font-size);
  color: var(--first-color);
  font-weight: var(--font-medium);
}

.experience__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.experience__period,
.experience__location {
  display: inline-flex;
  align-items: center;
  column-gap: 0.3rem;
  font-size: var(--smaller-font-size);
  color: var(--text-color-light);
  background-color: hsla(var(--first-hue), var(--sat), var(--lig), 0.1);
  padding: 0.2rem 0.65rem;
  border-radius: 5rem;
}

.experience__period-icon {
  font-size: 0.85rem;
}

.experience__bullets {
  display: grid;
  row-gap: 0.65rem;
  margin-bottom: 1.25rem;
  list-style: none;
  padding: 0;
}

.experience__bullet-item {
  display: flex;
  align-items: flex-start;
  column-gap: 0.5rem;
}

.experience__bullet-marker {
  color: var(--first-color);
  font-size: 0.8rem;
  margin-top: 0.15rem;
  flex-shrink: 0;
}

.experience__description {
  font-size: var(--small-font-size);
  color: var(--text-color);
  line-height: 1.6;
  margin: 0;
}

.experience__verify-btn {
  display: inline-flex;
  align-items: center;
  column-gap: 0.35rem;
  font-size: var(--smaller-font-size);
  font-weight: var(--font-bold);
  background-color: #0f172a;
  color: #fff;
  padding: 0.45rem 0.9rem;
  border-radius: 5rem;
  box-sizing: border-box;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.experience__verify-btn:hover {
  background-color: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(37, 99, 235, 0.2);
}

.experience__verify-link-icon {
  font-size: 0.75rem;
  transition: transform 0.3s ease;
}

.experience__verify-btn:hover .experience__verify-link-icon {
  transform: translate(1px, -1px);
}

/*=============== TECH STACK — IMAGE BASED ===============*/
.experience__tech-section {
  padding-top: 1rem;
  border-top: 1px solid hsla(var(--first-hue), var(--sat), var(--lig), 0.1);
}

.experience__tech-label {
  font-size: var(--tiny-font-size);
  font-weight: var(--font-semibold);
  color: var(--text-color-light);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.65rem;
  display: block;
}

.experience__tech-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.experience__tech-badge {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background-color: var(--body-color);
  border: 1px solid hsla(var(--first-hue), var(--sat), var(--lig), 0.15);
  border-radius: 2rem;
  padding: 0.28rem 0.65rem 0.28rem 0.4rem;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  cursor: default;
}

.experience__tech-badge:hover {
  transform: translateY(-2px) scale(1.04);
}

.experience__tech-img {
  width: 1.2rem;
  height: 1.2rem;
  object-fit: contain;
  flex-shrink: 0;
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
}

/* invert next.svg and git.svg for dark mode legibility */
.experience__tech-img--invert {
  filter: invert(1) drop-shadow(0 1px 2px rgba(0,0,0,0.2));
}

.light-theme .experience__tech-img--invert {
  filter: invert(0) drop-shadow(0 1px 2px rgba(0,0,0,0.2));
}

.experience__tech-name {
  font-size: 0.68rem;
  font-weight: var(--font-medium);
  color: var(--text-color);
  white-space: nowrap;
  line-height: 1;
}

/*=============== EXPERIENCE BREAKPOINTS ===============*/

/* Very small phones */
@media screen and (max-width: 360px) {
  .experience__container {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .experience__card {
    padding: 1rem 0.9rem 1rem 0.85rem;
    border-radius: 1rem;
  }

  .experience__img-box {
    width: 2.25rem;
    height: 2.25rem;
  }

  .experience__title {
    font-size: var(--small-font-size);
  }

  .experience__company {
    font-size: var(--tiny-font-size);
  }

  .experience__verify-btn {
    font-size: 0.6rem;
    padding: 0.35rem 0.65rem;
  }

  .experience__description {
    font-size: var(--smaller-font-size);
  }

  .experience__tech-badge {
    padding: 0.22rem 0.5rem 0.22rem 0.32rem;
    gap: 0.3rem;
  }

  .experience__tech-img {
    width: 1rem;
    height: 1rem;
  }

  .experience__tech-name {
    font-size: 0.6rem;
  }
}

/* Standard mobile */
@media screen and (max-width: 520px) {
  .experience__container {
    row-gap: 1.1rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .experience__card {
    padding: 1.1rem 1rem 1.1rem 0.95rem;
    border-radius: 1rem;
  }

  .experience__header {
    flex-direction: row;
    align-items: center;
    column-gap: 0.75rem;
    flex-wrap: wrap;
    row-gap: 0.5rem;
    margin-bottom: 0.6rem;
  }

  .experience__img-box {
    width: 2.4rem;
    height: 2.4rem;
  }

  .experience__info {
    flex: 1;
    min-width: 0;
  }

  .experience__title {
    font-size: var(--small-font-size);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .experience__company {
    font-size: var(--tiny-font-size);
  }

  .experience__verify-btn {
    font-size: 0.62rem;
    padding: 0.38rem 0.7rem;
    column-gap: 0.25rem;
  }

  .experience__meta {
    gap: 0.4rem;
    margin-bottom: 0.75rem;
  }

  .experience__period,
  .experience__location {
    font-size: 0.65rem;
    padding: 0.18rem 0.55rem;
  }

  .experience__bullets {
    row-gap: 0.55rem;
    margin-bottom: 1rem;
  }

  .experience__description {
    font-size: var(--smaller-font-size);
    line-height: 1.55;
  }

  .experience__tech-section {
    padding-top: 0.75rem;
  }

  .experience__tech-label {
    font-size: 0.6rem;
    margin-bottom: 0.5rem;
  }

  .experience__tech-wrapper {
    gap: 0.4rem;
  }

  .experience__tech-badge {
    padding: 0.24rem 0.55rem 0.24rem 0.35rem;
    gap: 0.3rem;
  }

  .experience__tech-img {
    width: 1.05rem;
    height: 1.05rem;
  }

  .experience__tech-name {
    font-size: 0.63rem;
  }
}

@media screen and (min-width: 630px) {
  .experience__container {
    max-width: 600px;
  }
}

@media screen and (min-width: 992px) {
  .experience__container {
    max-width: 800px;
    row-gap: 2rem;
  }

  .experience__card {
    padding: 2rem 2rem 2rem 1.75rem;
  }

  .experience__tech-img {
    width: 1.35rem;
    height: 1.35rem;
  }

  .experience__tech-name {
    font-size: 0.72rem;
  }
}
`;

const experienceData = [
  {
    title: "Full Stack Developer Intern",
    company: "JaruratCare Foundation",
    period: "Nov 2025 - Mar 2026",
    location: "Remote",
    thumbnail: "/jaru.png",
    certificateUrl: "/Certi.pdf",
    descBullets: [
      "Built a full-stack Nurse Management System using MERN stack (React, Node.js, Express, MongoDB) and Firebase, enabling efficient staff management, data handling, and real-time updates.",
      "Developed and enhanced a WhatsApp bot system using Java and Spring Boot, implementing new features, optimizing workflows, and improving automated user interactions.",
      "Designed and contributed to multiple solo and team-based projects, collaborating with developers to deliver scalable and production-ready solutions.",
      "Developed and maintained the organization's main website, improving UI/UX, performance, and overall user engagement.",
      "Gained hands-on experience in full-stack development, API integration, and real-world problem solving, delivering high-quality features in a collaborative environment.",
    ],
    techStack: [
      { id: 1, name: "React", img: "/React.png" },
      { id: 2, name: "Node.js", img: "/Node.js.png" },
      { id: 3, name: "MongoDB", img: "/MongoDB.png" },
      { id: 4, name: "Tailwind", img: "/Tailwind CSS.png" },
      { id: 5, name: "Firebase", img: "/Firebase.png" },
      { id: 6, name: "Java", img: "/Java.png" },
      { id: 7, name: "Spring Boot", img: "/Spring.png" },
      { id: 8, name: "Express", img: "/ex.png" },
      { id: 9, name: "JavaScript", img: "/JavaScript.png" },
      { id: 10, name: "TypeScript", img: "/ts.svg", invert: true },
      { id: 11, name: "Git", img: "/git.svg", invert: true },
      { id: 14, name: "Supabase", img: "/icons8-supabase-48.png" },
      { id: 15, name: "Docker", img: "/dock.svg" },
      { id: 16, name: "Next.js", img: "/next.svg", invert: true },
    ],
  },
];

export default function Experience() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: experienceStyles }} />
      <section className="experience section" id="experience">
        <span className="section__subtitle">My Journey</span>
        <h2 className="section__title">Experience</h2>

        <div className="experience__container">
          {experienceData.map((item, index) => (
            <div className="experience__card" key={index}>
              <div className="experience__header">
                <div className="experience__img-box">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.thumbnail}
                    alt={item.company}
                    className="experience__thumb-img"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      if (e.currentTarget.nextSibling) {
                        e.currentTarget.nextSibling.style.display = "block";
                      }
                    }}
                  />
                  <i
                    className="bx bx-briefcase-alt-2 experience__icon"
                    style={{ display: "none" }}
                  ></i>
                </div>

                <div className="experience__info">
                  <h3 className="experience__title">{item.title}</h3>
                  <span className="experience__company">{item.company}</span>
                </div>

                {item.certificateUrl && (
                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience__verify-btn"
                  >
                    <i className="bx bx-badge-check"></i>
                    <span>VERIFY</span>
                    <i className="bx bx-export experience__verify-link-icon"></i>
                  </a>
                )}
              </div>

              <div className="experience__meta">
                <span className="experience__period">
                  <i className="bx bx-calendar experience__period-icon"></i>
                  {item.period}
                </span>
                <span className="experience__location">
                  <i className="bx bx-map experience__period-icon"></i>
                  {item.location}
                </span>
              </div>

              <ul className="experience__bullets">
                {item.descBullets.map((bullet, idx) => (
                  <li key={idx} className="experience__bullet-item">
                    <span className="experience__bullet-marker">✦</span>
                    <p className="experience__description">{bullet}</p>
                  </li>
                ))}
              </ul>

              {/* Tech stack — image based */}
              <div className="experience__tech-section">
                <span className="experience__tech-label">Tech Stack</span>
                <div className="experience__tech-wrapper">
                  {item.techStack.map((tech) => (
                    <div key={tech.id} className="experience__tech-badge">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className={`experience__tech-img${tech.invert ? " experience__tech-img--invert" : ""}`}
                      />
                      <span className="experience__tech-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
