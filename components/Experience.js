"use client";
import React, { useState } from "react";

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
      { name: "React", icon: "bx bxl-react", color: "#61DAFB" },
      { name: "Node.js", icon: "bx bxl-nodejs", color: "#339933" },
      { name: "MongoDB", icon: "bx bxl-mongodb", color: "#47A248" },
      { name: "Tailwind", icon: "bx bxl-tailwind-css", color: "#06B6D4" },
      { name: "Firebase", icon: "bx bxl-firebase", color: "#FFCA28" },
      { name: "Java", icon: "bx bxl-java", color: "#007396" },
      { name: "Spring Boot", icon: "bx bx-server", color: "#6DB33F" },
      { name: "Express", icon: "bx bx-code-block", color: "#ffffff" },
      { name: "JavaScript", icon: "bx bxl-javascript", color: "#F7DF1E" },
      { name: "Supabase", icon: "bx bx-data", color: "#3ECF8E" },
      { name: "Next.js", icon: "bx bxl-visual-studio", color: "#ffffff" },
    ],
  },
];

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
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
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
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

              {/* Verify Button: हुबेहूब Home मधील About बटन सारखा इफेक्ट */}
              {item.certificateUrl && (
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience__verify-btn"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    backgroundColor:
                      hoveredIndex === index
                        ? "transparent"
                        : "var(--first-color)",
                    color:
                      hoveredIndex === index ? "var(--text-color)" : "#fff",
                    borderColor:
                      hoveredIndex === index
                        ? "var(--text-color)"
                        : "transparent",
                    borderStyle: "solid",
                    borderWidth: "2px",
                    transition: "all 0.3s ease",
                  }}
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

            <div className="experience__tech-wrapper">
              {item.techStack.map((tech, tIdx) => (
                <div key={tIdx} className="experience__tech-badge">
                  <i
                    className={`${tech.icon} experience__tech-icon`}
                    style={{ color: tech.color }}
                  ></i>
                  <span className="experience__tech-tooltip">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
