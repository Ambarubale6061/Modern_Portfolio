"use client";

import { useState } from "react";

const servicesData = [
  {
    title: "Full Stack\nDevelopment",
    modalTitle: "Full Stack Development",
    description:
      "Building scalable web applications from frontend to backend with performance, scalability, and real-world impact in mind.",
    items: [
      "MERN Stack Apps development.",
      "Designing and implementing REST APIs.",
      "Seamless application deployment and cloud integration.",
    ],
  },
  {
    title: "AI\nIntegration",
    modalTitle: "AI Integration",
    description:
      "Integrating modern AI features and smart automation tools to enhance user experiences and application capabilities.",
    items: [
      "Integrating OpenAI and custom LLM APIs.",
      "Developing intelligent Chatbot features.",
      "Workflow automation and smart data parsing.",
    ],
  },
  {
    title: "Frontend\nDevelopment",
    modalTitle: "Frontend Development",
    description:
      "Creating responsive, visually engaging, and highly dynamic user interfaces tailored to perfect client needs.",
    items: [
      "Building high-performance React and Next.js apps.",
      "Developing fully responsive and mobile-first UI designs.",
      "Implementing smooth web animations and transitions.",
    ],
  },
  {
    title: "Backend\nDevelopment",
    modalTitle: "Backend Development",
    description:
      "Developing robust, secure, and easily scalable backend architectures to support heavy data loads.",
    items: [
      "Creating robust Node.js and Express APIs.",
      "Implementing secure authentication and authorization protocols.",
      "Efficient backend services and third-party API integration.",
    ],
  },
  {
    title: "Performance\nOptimization",
    modalTitle: "Optimization",
    description:
      "Improving system performance, load speeds, SEO optimization, and clean code refactoring.",
    items: [
      "Boosting web application performance and Core Web Vitals.",
      "Code refactoring and reducing technical debt.",
      "Following industry-standard web best practices.",
    ],
  },
  {
    title: "Database\nDesign",
    modalTitle: "Database Design",
    description:
      "Designing structured, efficient, and secure relational or non-relational data storage frameworks.",
    items: [
      "Designing optimized database schemas (SQL/NoSQL).",
      "Building secure and reliable CRUD systems.",
      "Query optimization and indexing for faster access.",
    ],
  },
];

export default function Services() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (index) => setActiveModal(index);
  const closeModal = () => setActiveModal(null);

  return (
    <section className="services section">
      <span className="section__subtitle">My Services</span>
      <h2 className="section__title">What I Offer</h2>

      {/* Main Wrapper Container Box */}
      <div
        className="services__main-wrapper"
        style={{
          position: "relative",
          width: "92%",
          maxWidth: "1150px",
          margin: "0 auto",
          borderRadius: "20px",
          /* Changed overflow away from 'hidden' to prevent the main box container 
             from cutting off expanded card popups on the top/bottom edges.
          */
          overflow: "visible",
          background:
            "radial-gradient(circle at 50% 50%, #0a0c14 0%, #020306 100%)",
          border: "1px solid rgba(255, 255, 255, 0.02)",
          padding: "3rem 0",
        }}
      >
        {/* Premium Deep Blue Wavy Animation Layer */}
        <div
          className="services__bg-waves"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
            opacity: 0.45,
            overflow:
              "hidden" /* Keeps the waves bound perfectly inside the wrapper border radius */,
            borderRadius: "20px",
          }}
        >
          <svg
            style={{ width: "100%", height: "100%" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="blueWaveGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(0, 102, 255, 0.15)" />
                <stop offset="50%" stopColor="rgba(0, 221, 255, 0.03)" />
                <stop offset="100%" stopColor="rgba(0, 51, 204, 0.12)" />
              </linearGradient>
            </defs>
            {/* Wave Path 1 */}
            <path
              d="M 0 420 Q 350 250, 700 420 T 1400 420 T 2100 420 V 1200 H 0 Z"
              fill="url(#blueWaveGrad)"
            >
              <animate
                attributeName="d"
                dur="12s"
                repeatCount="indefinite"
                values="
                  M 0 420 Q 350 250, 700 420 T 1400 420 T 2100 420 V 1200 H 0 Z;
                  M 0 420 Q 350 580, 700 420 T 1400 280 T 2100 420 V 1200 H 0 Z;
                  M 0 420 Q 350 250, 700 420 T 1400 420 T 2100 420 V 1200 H 0 Z
                "
              />
            </path>
            {/* Wave Path 2 */}
            <path
              d="M 0 480 Q 450 580, 900 380 T 1800 480 T 2100 480 V 1200 H 0 Z"
              fill="url(#blueWaveGrad)"
              opacity="0.6"
            >
              <animate
                attributeName="d"
                dur="18s"
                repeatCount="indefinite"
                values="
                  M 0 480 Q 450 580, 900 380 T 1800 480 T 2100 480 V 1200 H 0 Z;
                  M 0 480 Q 450 280, 900 480 T 1800 320 T 2100 480 V 1200 H 0 Z;
                  M 0 480 Q 450 580, 900 380 T 1800 480 T 2100 480 V 1200 H 0 Z
                "
              />
            </path>
          </svg>
        </div>

        {/* 6 Cards Grid Container */}
        <div
          className="services__container container grid"
          style={{ position: "relative", zIndex: 2 }}
        >
          {servicesData.map((service, index) => (
            <div
              className="services__card"
              key={index}
              style={{
                background: "rgba(255, 255, 255, 0.01)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.04)",
                borderRadius: "12px",
                position: "relative",
                /* CRITICAL FIX: Dynamically elevates the specific card when its popup is active.
                   This brings the active content to the absolute front of the grid layout stack.
                */
                zIndex: activeModal === index ? 50 : 5,
                /* Ensures content handles any layout overflow gracefully */
                overflow: activeModal === index ? "visible" : "hidden",
              }}
            >
              <h3 className="services__title">
                {service.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < service.title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h3>

              <span
                className="services__button"
                onClick={() => openModal(index)}
                style={{ cursor: "pointer" }}
              >
                See More <i className="bx bx-right-arrow services__icon"></i>
              </span>

              {/* Popups/Modals inside the card loop structure */}
              <div
                className={`services__modal ${
                  activeModal === index ? "active-modal" : ""
                }`}
              >
                <div className="services__modal-content">
                  <i
                    className="bx bx-x services__modal-close"
                    onClick={closeModal}
                    style={{ cursor: "pointer" }}
                  ></i>

                  <h3 className="services__modal-title">
                    {service.modalTitle}
                  </h3>

                  <p className="services__modal-description">
                    {service.description}
                  </p>

                  <ul className="services__modal-list">
                    {service.items.map((item, i) => (
                      <li className="services__modal-item" key={i}>
                        <i className="bx bx-check-circle"></i>
                        <p className="services__modal-info">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
