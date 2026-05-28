"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const servicesData = [
  {
    title: "Full Stack\nDevelopment",
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
    title: "AI\nIntegration",
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
    title: "Frontend\nDevelopment",
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
    title: "Backend\nDevelopment",
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
    title: "Performance\nOptimization",
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
    title: "Database\nDesign",
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
  const [activeHover, setActiveHover] = useState(null);

  return (
    <section className="services section" style={{ overflow: "hidden" }}>
      <span className="section__subtitle">My Services</span>
      <h2 className="section__title">What I Offer</h2>

      <div
        className="services__main-wrapper"
        style={{
          position: "relative",
          width: "92%",
          maxWidth: "1150px",
          margin: "0 auto",
          borderRadius: "20px",
          overflow: "hidden",
          background:
            "linear-gradient(to bottom, #020204 0%, #080b12 50%, #020204 100%)",
          border: "1px solid rgba(255, 255, 255, 0.02)",
          padding: "4rem 0",
          boxSizing: "border-box",
        }}
      >
        {/* Premium Center-Aligned Blue Wavy Animation Layer */}
        <div
          className="services__bg-waves"
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            width: "100%",
            height: "60%",
            transform: "translateY(-50%)",
            zIndex: 1,
            pointerEvents: "none",
            opacity: 0.55,
            overflow: "hidden",
          }}
        >
          <svg
            style={{ width: "100%", height: "100%" }}
            viewBox="0 0 1440 600"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="blueWaveGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(0, 102, 255, 0.2)" />
                <stop offset="50%" stopColor="rgba(0, 221, 255, 0.04)" />
                <stop offset="100%" stopColor="rgba(0, 51, 204, 0.15)" />
              </linearGradient>
            </defs>
            <path
              d="M 0 300 Q 360 150, 720 300 T 1440 300 V 600 H 0 Z"
              fill="url(#blueWaveGrad)"
            >
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="
                  M 0 300 Q 360 150, 720 300 T 1440 300 V 600 H 0 Z;
                  M 0 300 Q 360 450, 720 300 T 1440 150 V 600 H 0 Z;
                  M 0 300 Q 360 150, 720 300 T 1440 300 V 600 H 0 Z"
              />
            </path>
            <path
              d="M 0 350 Q 400 450, 800 250 T 1440 350 V 600 H 0 Z"
              fill="url(#blueWaveGrad)"
              opacity="0.6"
            >
              <animate
                attributeName="d"
                dur="15s"
                repeatCount="indefinite"
                values="
                  M 0 350 Q 400 450, 800 250 T 1440 350 V 600 H 0 Z;
                  M 0 350 Q 400 150, 800 350 T 1440 200 V 600 H 0 Z;
                  M 0 350 Q 400 450, 800 250 T 1440 350 V 600 H 0 Z"
              />
            </path>
          </svg>
        </div>

        {/* Global CSS for Perfect Layout Spacing & Centered Alignment */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .services__grid-container {
            position: relative;
            z-index: 2;
          }

          .premium__fixed-card {
            background: rgba(255, 255, 255, 0.01);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            position: relative;
            overflow: hidden !important;
            padding: 2.2rem 1.6rem !important; 
            min-height: 380px; 
            max-height: 380px; 
            box-sizing: border-box;
            transition: border-color 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                        background-color 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                        transform 0.4s cubic-bezier(0.25, 1, 0.5, 1),
                        opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1);
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center; /* सर्व कंटेंटला क्षैतिज (Horizontally) सेंटर करण्यासाठी */
          }

          @media screen and (max-width: 768px) {
            .premium__fixed-card {
              min-height: 360px !important;
              max-height: 360px !important;
              padding: 1.8rem 1.3rem !important;
            }
          }

          .premium__fixed-card:hover {
            border-color: rgba(0, 102, 255, 0.35);
            background: rgba(255, 255, 255, 0.02);
            transform: scale(1.015);
          }

          .services__grid-container:has(.premium__fixed-card:hover) .premium__fixed-card:not(:hover) {
            transform: scale(0.975);
            opacity: 0.6;
          }

          /* HEADER BOX: सुरुवातीला परफेक्ट सेंटरमध्ये राहण्यासाठी आणि हॉव्हरवर वर सरकण्यासाठी */
          .card__header-box {
            display: flex;
            flex-direction: column;
            align-items: center; /* आयकॉन आणि टायटल सेंटरला अलाइन */
            text-align: center; /* टेक्स्ट सेंटर करण्यासाठी */
            width: 100%;
            transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
            transform: translateY(75px); /* सुरुवातीला परफेक्ट व्हर्टिकल सेंटर पोझिशन */
            z-index: 2;
          }

          .premium__fixed-card.is-card-hovered .card__header-box {
            transform: translateY(0px); /* हॉव्हर केल्यावर स्मूथली वर जाईल */
          }

          .card__icon-element {
            font-size: 2.6rem; 
            color: rgba(255, 255, 255, 0.6);
            transition: transform 0.4s ease, color 0.4s ease;
          }
          
          .premium__fixed-card:hover .card__icon-element {
            color: #00ddff;
            transform: rotate(-4deg) scale(1.02);
          }

          /* BODY CONTENT: डाव्या बाजूने व्यवस्थित सुरू होण्यासाठी */
          .card__body-content {
            margin-top: 0.6rem;
            z-index: 3;
            display: flex;
            flex-direction: column;
            width: 100%;
            opacity: 0;
            transition: opacity 0.2s ease;
            align-items: flex-start; /* आतील टायपिंग डिस्क्रिप्शन डावीकडून सुरू होईल */
            text-align: left;
          }

          .premium__fixed-card.is-card-hovered .card__body-content {
            opacity: 1;
          }

          .fixed__panel-desc {
            font-size: 0.84rem;
            color: rgba(255, 255, 255, 0.72);
            line-height: 1.45;
            margin-bottom: 0.6rem;
            min-height: 55px;
          }

          .fixed__panel-list {
            display: flex;
            flex-direction: column;
            gap: 0.45rem;
            width: 100%;
          }

          .fixed__panel-item {
            display: flex;
            align-items: flex-start;
            gap: 0.45rem;
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.85);
            line-height: 1.25;
          }

          .fixed__panel-item i {
            color: #00ddff;
            margin-top: 1px;
            font-size: 0.85rem;
            flex-shrink: 0;
            opacity: 0;
            transition: opacity 0.15s ease;
          }

          .premium__fixed-card.is-card-hovered .fixed__panel-item i {
            opacity: 1;
          }
        `,
          }}
        />

        {/* 6 Cards Grid Container */}
        <div className="services__container container grid services__grid-container">
          {servicesData.map((service, index) => {
            const isHovered = activeHover === index;

            return (
              <div
                className={`premium__fixed-card ${isHovered ? "is-card-hovered" : ""}`}
                key={index}
                onMouseEnter={() => setActiveHover(index)}
                onMouseLeave={() => setActiveHover(null)}
              >
                {/* Centered Header Section (Icon & Title) */}
                <div className="card__header-box">
                  <div className="card__icon-element">
                    <i className={service.iconClass}></i>
                  </div>
                  <h3
                    className="services__title"
                    style={{
                      marginTop: "0.6rem",
                      lineHeight: "1.25",
                      fontSize: "1.15rem",
                    }}
                  >
                    {service.title.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < service.title.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>

                {/* Inline Typing Content Area */}
                <div className="card__body-content">
                  <div className="fixed__panel-desc">
                    {isHovered && (
                      <TypeAnimation
                        sequence={[service.description]}
                        speed={92}
                        cursor={false}
                        wrapper="p"
                      />
                    )}
                  </div>

                  <ul className="fixed__panel-list">
                    {service.items.map((item, i) => (
                      <li className="fixed__panel-item" key={i}>
                        <i className="bx bx-check-circle"></i>
                        <span>
                          {isHovered && (
                            <TypeAnimation
                              sequence={[
                                i === 0 ? 300 : i === 1 ? 1000 : 1700,
                                item,
                              ]}
                              speed={95}
                              cursor={false}
                              wrapper="span"
                            />
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
