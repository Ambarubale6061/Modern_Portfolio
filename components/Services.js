"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const servicesData = [
  {
    title: "Full Stack Development",
    description:
      "Building scalable web applications from frontend to backend with performance, scalability, and real-world impact.",
    iconClass: "bx bx-code-block",
    items: [
      "MERN Stack Apps development.",
      "Designing and implementing REST APIs.",
      "Seamless cloud integration.",
    ],
  },
  {
    title: "AI Integration",
    description:
      "Integrating modern AI features and smart automation tools to enhance user experiences and capabilities.",
    iconClass: "bx bx-brain",
    items: [
      "Integrating OpenAI & LLM APIs.",
      "Intelligent Chatbot features.",
      "Workflow automation parsing.",
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Creating responsive, visually engaging, and highly dynamic user interfaces tailored to perfect client needs.",
    iconClass: "bx bx-layer",
    items: [
      "High-performance React & Next.js.",
      "Responsive mobile-first designs.",
      "Smooth animations & transitions.",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Developing robust, secure, and easily scalable backend architectures to support heavy data loads.",
    iconClass: "bx bx-server",
    items: [
      "Robust Node.js & Express APIs.",
      "Secure authentication protocols.",
      "Efficient backend services.",
    ],
  },
  {
    title: "Performance Optimization",
    description:
      "Improving system performance, load speeds, SEO optimization, and clean code refactoring.",
    iconClass: "bx bx-tachometer",
    items: [
      "Boosting Core Web Vitals.",
      "Code refactoring & debt reduction.",
      "Industry web best practices.",
    ],
  },
  {
    title: "Database Design",
    description:
      "Designing structured, efficient, and secure relational or non-relational data storage frameworks.",
    iconClass: "bx bx-data",
    items: [
      "Optimized database schemas.",
      "Secure & reliable CRUD systems.",
      "Query optimization & indexing.",
    ],
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [tapIndex, setTapIndex] = useState(null);

  const handleTap = (i) => setTapIndex((p) => (p === i ? null : i));

  const isContainerActive = activeIndex !== null || tapIndex !== null;

  return (
    <section className="services section" id="services">
      <span className="section__subtitle">My Services</span>
      <h2 className="section__title">What I Offer</h2>

      <div
        className={`services__container container grid ${isContainerActive ? "services__container--has-active" : ""}`}
      >
        {servicesData.map((service, i) => {
          const isActive = activeIndex === i || tapIndex === i;

          return (
            <div
              key={i}
              className={`services__premium-card services__card${isActive ? " services__card--active" : ""}`}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => handleTap(i)}
            >
              <div className="services__card-top">
                <span className="services__card-icon">
                  <i className={service.iconClass} />
                </span>
                <h3 className="services__card-title">{service.title}</h3>
              </div>

              {/* या भागात आधीच्या डिझाइनप्रमाणे बदल केला आहे */}
              <div className="services__card-more">
                <span className="services__button">
                  See More <i className="bx bx-right-arrow services__icon"></i>
                </span>
              </div>

              <div className="services__card-bottom">
                <p className="services__card-desc">
                  {isActive && (
                    <TypeAnimation
                      key={i}
                      sequence={[service.description]}
                      speed={94}
                      cursor={false}
                      wrapper="span"
                    />
                  )}
                </p>

                <ul className="services__card-list">
                  {service.items.map((item, j) => (
                    <li key={j} className="services__card-item">
                      <i className="bx bx-check-circle services__card-check" />
                      <span>
                        {isActive && (
                          <TypeAnimation
                            key={`${i}-${j}`}
                            sequence={[
                              j === 0 ? 280 : j === 1 ? 950 : 1620,
                              item,
                            ]}
                            speed={96}
                            cursor={false}
                            wrapper="span"
                          />
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <span className="services__card-accent" aria-hidden="true" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
