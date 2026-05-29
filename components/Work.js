"use client";

import React, { useState, useCallback } from "react";
import { ExternalLink } from "lucide-react";

/* ─── Project data ────────────────────────────────────────────────── */
const projects = [
  {
    title: "AgenticAI Studio",
    tagline: "Autonomous agent orchestration",
    description:
      "Architected a multi-agent AI coding platform (Planner, Coder, Debugger) that automates end-to-end code generation, execution, and debugging. Features real-time streaming (SSE) with <2s latency, agent memory, version control, and a hybrid execution engine within a browser-based IDE.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    image: "/IDE.png",
    link: "https://agentic-ai-studio-chi.vercel.app/",
    github: "https://github.com/Ambarubale6061/AgenticAI-Studio",
    accentFrom: "#7c3aed",
    accentTo: "#c026d3",
    category: "web",
  },
  {
    title: "FutureCart",
    tagline: "AI-powered commerce",
    description:
      "Built a scalable full-stack eCommerce platform supporting 50+ products with filtering, cart, wishlist, and secure checkout. Features a real-time product management system via Supabase Realtime, reducing admin update delays by 60%, with role-based architecture and chatbot integration.",
    tech: ["React", "Tailwind CSS", "TypeScript", "Supabase"],
    image: "/home.png",
    link: "https://futurecart-e-commerce.vercel.app/",
    github:
      "https://github.com/Ambarubale6061/FutureCart-Modern-eCommerce-Platform",
    accentFrom: "#059669",
    accentTo: "#0d9488",
    category: "web",
  },
  {
    title: "Connectly",
    tagline: "Real-time collaboration",
    description:
      "Developed a scalable social media platform supporting posts, reels, stories, and real-time interactions. Delivers low-latency (<1s) messaging, notifications, and presence via Supabase Realtime, with peer-to-peer voice and video calling via WebRTC and secure Postgres/RLS backend.",
    tech: ["React", "TypeScript", "Supabase", "WebRTC"],
    image: "/hom.png",
    link: "https://connectly-tau.vercel.app/",
    github: "https://github.com/Ambarubale6061/Connectly",
    accentFrom: "#0891b2",
    accentTo: "#2563eb",
    category: "movil",
  },
  {
    title: "Task Manager",
    tagline: "Smart daily task organizer",
    description:
      "Built an efficient task management application to organize, track, and manage daily activities with a clean and responsive user interface for improved productivity.",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    image: "/taskapp.png",
    link: "https://task-app-nine-lovat.vercel.app/",
    github: "https://github.com/yourusername/task-manager-app",
    accentFrom: "#2563eb",
    accentTo: "#0891b2",
    category: "design",
  },
  {
    title: "QuickCart",
    tagline: "Modern e-commerce experience",
    description:
      "Developed a modern e-commerce web application with responsive UI, product listings, cart functionality, and secure backend integration using MongoDB and Next.js.",
    tech: ["Next.js", "Node.js", "Tailwind CSS", "MongoDB"],
    image: "/quick.png",
    link: "https://quickcart-ten-opal.vercel.app/",
    github: "https://github.com/yourusername/quickcart",
    accentFrom: "#059669",
    accentTo: "#16a34a",
    category: "web",
  },
  {
    title: "Weather App",
    tagline: "Live weather insights",
    description:
      "Designed a real-time weather dashboard that displays temperature, humidity, and weather forecasts for different cities with a modern and responsive UI.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Vite"],
    image: "/weather.png",
    link: "https://weather-dashboard-six-steel.vercel.app/",
    github: "https://github.com/yourusername/weather-app",
    accentFrom: "#d97706",
    accentTo: "#ea580c",
    category: "design",
  },
];

/* ─── Github icon (inline SVG, no external dependency) ───────────── */
function GithubIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

/* ─── Single project card ─────────────────────────────────────────── */
function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);
  const handleImgError = useCallback(() => setImgError(true), []);

  return (
    <div className="work__card">
      {/* Image panel */}
      <div className="work__img-wrap">
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            onError={handleImgError}
            className="work__img"
          />
        ) : (
          /* Fallback gradient when image fails to load */
          <div
            className="work__img-fallback"
            style={{
              background: `linear-gradient(135deg, ${project.accentFrom}33, ${project.accentTo}33)`,
            }}
          >
            <span
              className="work__img-fallback-letter"
              style={{ color: project.accentFrom }}
            >
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Accent bar at bottom of image */}
        <div
          className="work__accent-bar"
          style={{
            background: `linear-gradient(90deg, ${project.accentFrom}, ${project.accentTo})`,
          }}
        />
      </div>

      {/* Card body */}
      <div className="work__body">
        <span className="work__tagline">{project.tagline}</span>
        <h3 className="work__title">{project.title}</h3>
        <p className="work__desc">{project.description}</p>

        {/* Tech badges */}
        <div className="work__tech">
          {project.tech.map((t) => (
            <span key={t} className="work__badge">
              {t}
            </span>
          ))}
        </div>

        <div className="work__divider" />

        {/* Action links */}
        <div className="work__actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="work__action-link"
          >
            <GithubIcon className="work__action-icon" />
            Code
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="work__action-link work__action-link--primary"
          >
            <ExternalLink className="work__action-icon" size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Section Export ─────────────────────────────────────────────────── */
export default function Work() {
  return (
    <section className="work section" id="work">
      {/* Injecting CSS Styles dynamically into the component context */}
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <span className="section__subtitle">My Portfolio</span>
      <h2 className="section__title">Recent Works</h2>

      {/* Project cards grid */}
      <div className="work__container container grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

/* ─── Consolidated Component Styles ───────────────────────────────── */
const styles = `
  /*=============== WORK ===============*/
  .work__container {
    padding-top: 1rem;
  }

  .work__filters {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.75rem;
    margin-bottom: 2rem;
  }

  .work__item {
    cursor: pointer;
    color: var(--title-color);
    padding: 0.25rem 0.75rem;
    font-weight: var(--font-medium);
    border-radius: 0.5rem;
    transition: background-color 0.3s, color 0.3s;
  }

  .active-work {
    background-color: var(--first-color);
    color: var(--body-color);
  }

  /*========== Light theme overrides: Work ==========*/
  .light-theme .active-work {
    color: var(--title-color);
  }

  /*=============== PROJECT CARD ===============*/
  .work__card {
    background-color: var(--container-color);
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .work__card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px hsla(var(--second-hue), 48%, 8%, 0.25);
  }

  /* Image wrapper */
  .work__img-wrap {
    position: relative;
    width: 100%;
    height: 160px;
    overflow: hidden;
    background-color: var(--body-color);
    flex-shrink: 0;
  }

  .work__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0;
    margin-bottom: 0;
    transition: transform 0.5s ease;
  }

  .work__card:hover .work__img {
    transform: scale(1.05);
  }

  /* Fallback when image fails */
  .work__img-fallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .work__img-fallback-letter {
    font-size: 3rem;
    font-weight: var(--font-semibold);
    opacity: 0.5;
    font-family: var(--body-font);
  }

  /* Colored accent bar at bottom of image */
  .work__accent-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
  }

  /* Card body */
  .work__body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1rem;
    gap: 0.5rem;
  }

  .work__tagline {
    font-size: var(--tiny-font-size);
    font-weight: var(--font-semibold);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-color-light);
  }

  .work__title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-semibold);
    color: var(--title-color);
    margin-bottom: 0;
    transition: color 0.2s;
  }

  .work__card:hover .work__title {
    color: var(--first-color);
  }

  .work__desc {
    font-size: var(--smaller-font-size);
    color: var(--text-color);
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1;
  }

  /* Tech badges */
  .work__tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    margin-top: 0.25rem;
  }

  .work__badge {
    font-size: var(--tiny-font-size);
    font-weight: var(--font-medium);
    padding: 0.2rem 0.55rem;
    border-radius: 0.35rem;
    background-color: var(--body-color);
    color: var(--text-color);
    border: 1px solid hsla(var(--second-hue), 15%, 50%, 0.15);
  }

  /* Divider */
  .work__divider {
    height: 1px;
    background-color: hsla(var(--second-hue), 15%, 50%, 0.1);
    margin: 0.25rem 0;
  }

  /* Action links row */
  .work__actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .work__action-link {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: var(--smaller-font-size);
    font-weight: var(--font-semibold);
    color: var(--text-color);
    transition: color 0.2s;
    cursor: pointer;
    text-decoration: none;
  }

  .work__action-link:hover {
    color: var(--title-color);
  }

  .work__action-link--primary:hover {
    color: var(--first-color);
  }

  .work__action-icon {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }

  /*========== Light theme overrides: Work card ==========*/
  .light-theme .work__card {
    box-shadow: 0 2px 16px hsla(var(--second-hue), 48%, 8%, 0.08);
  }

  .light-theme .work__badge {
    background-color: #f1f5f9;
  }

  /*=============== WORK BREAKPOINTS ===============*/
  @media screen and (max-width: 320px) {
    .work__item {
      font-size: var(--small-font-size);
    }
    .work__filters {
      column-gap: 0.25rem;
    }
  }

  @media screen and (min-width: 435px) {
    .work__container {
      justify-content: center;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 630px) {
    .work__container {
      justify-content: center;
      grid-template-columns: repeat(2, 1fr);
      max-width: 640px;
      margin-inline: auto;
    }
    .work__img-wrap {
      height: 180px;
    }
  }

  @media screen and (min-width: 992px) {
    .work__container {
      grid-template-columns: repeat(3, 1fr);
      max-width: 968px;
      gap: 1.5rem;
    }
    .work__body {
      padding: 1.25rem;
    }
    .work__img-wrap {
      height: 190px;
    }
  }
`;
