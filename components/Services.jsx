"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const servicesStyles = `
/*=============== SERVICES ===============*/
.services__container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding-top: 1rem;
}

.services__card {
  background-color: var(--container-color);
  border-radius: 1.25rem;
  border: 1px solid transparent;
  padding: 2.5rem 1.75rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition:
    border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    background-color 0.4s ease,
    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.4s ease;
}

.services__container--has-active .services__card {
  transform: scale(0.96);
  opacity: 0.6;
}

.services__container--has-active .services__card--active {
  transform: scale(1);
  opacity: 1;
  border-color: hsla(var(--first-hue), var(--sat), var(--lig), 0.38);
  box-shadow:
    0 12px 32px hsla(var(--first-hue), var(--sat), var(--lig), 0.12),
    0 2px 8px hsla(var(--second-hue), 48%, 8%, 0.06);
}

.services__card-accent {
  display: block;
  position: absolute;
  bottom: 0;
  left: 1.5rem;
  right: 1.5rem;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    hsla(var(--first-hue), var(--sat), var(--lig), 0),
    hsla(var(--first-hue), var(--sat), var(--lig), 0.6),
    hsla(var(--first-hue), var(--sat), var(--lig), 0)
  );
  opacity: 0;
  transition: opacity 0.38s ease;
  z-index: 3;
}

.services__card--active .services__card-accent {
  opacity: 1;
}

.services__card-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  width: 100%;
  transform: translateY(90px);
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;
}

.services__card--active .services__card-top {
  transform: translateY(0);
}

.services__card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.85rem;
  background: hsla(var(--first-hue), var(--sat), var(--lig), 0.12);
  color: var(--first-color);
  font-size: 1.7rem;
  flex-shrink: 0;
  transition:
    background 0.38s ease,
    transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);
}

.services__card--active .services__card-icon {
  background: hsla(var(--first-hue), var(--sat), var(--lig), 0.22);
  transform: scale(1.05);
}

.services__card-title {
  font-size: var(--h3-font-size);
  font-weight: var(--font-semibold);
  color: var(--title-color);
  line-height: 1.4;
  transition: color 0.32s ease;
}

.services__card--active .services__card-title {
  color: var(--first-color);
}

.services__card-more {
  position: absolute;
  bottom: 2.5rem;
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;
}

.services__button {
  color: var(--first-color);
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  cursor: pointer;
}

.services__icon {
  font-size: 1rem;
  transition: transform 0.4s ease;
}

.services__button:hover .services__icon {
  transform: translateX(0.25rem);
}

.services__card--active .services__card-more {
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
}

.services__card-bottom {
  position: absolute;
  bottom: 2.5rem;
  left: 1.75rem;
  right: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.35s ease 0.08s,
    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.08s;
  pointer-events: none;
  z-index: 1;
}

.services__card--active .services__card-bottom {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.services__card-desc {
  font-size: var(--small-font-size);
  color: var(--text-color);
  line-height: 1.5;
  text-align: left;
}

.services__card-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.services__card-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: var(--smaller-font-size);
  color: var(--text-color);
  line-height: 1.4;
}

.services__card-check {
  color: var(--first-color);
  font-size: 0.95rem;
  flex-shrink: 0;
  margin-top: 2px;
  opacity: 0;
  transition: opacity 0.18s ease;
}

.services__card--active .services__card-check {
  opacity: 1;
}

.light-theme .services__card {
  box-shadow: 0 2px 12px hsla(var(--second-hue), 48%, 8%, 0.04);
}

.light-theme .services__container--has-active .services__card--active {
  box-shadow:
    0 12px 32px hsla(var(--first-hue), var(--sat), 50%, 0.12),
    0 2px 8px hsla(var(--second-hue), 48%, 8%, 0.05);
}

@media screen and (max-width: 350px) {
  .services__card {
    height: 450px;
    padding: 2rem 1.25rem;
  }
  .services__card-top {
    transform: translateY(110px);
  }
  .services__card-bottom {
    left: 1.25rem;
    right: 1.25rem;
    bottom: 2rem;
  }
  .services__card-more {
    bottom: 2rem;
  }
}

@media screen and (min-width: 480px) {
  .services__container {
    grid-template-columns: repeat(2, 1fr);
  }
  .services__card {
    height: 420px;
  }
  .services__card-top {
    transform: translateY(100px);
  }
}

@media screen and (min-width: 768px) {
  .services__container {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  .services__card {
    height: 400px;
  }
  .services__card-top {
    transform: translateY(90px);
  }
}

@media screen and (min-width: 992px) {
  .services__card {
    height: 380px;
    padding: 2.5rem 2rem;
  }
  .services__card-top {
    transform: translateY(80px);
  }
  .services__card-bottom {
    left: 2rem;
    right: 2rem;
  }
}
`;

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
    <>
      <style dangerouslySetInnerHTML={{ __html: servicesStyles }} />
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

                <div className="services__card-more">
                  <span className="services__button">
                    See More{" "}
                    <i className="bx bx-right-arrow services__icon"></i>
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
    </>
  );
}
