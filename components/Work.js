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
    image: "/assets/img/work1.jpg",
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
    image: "/assets/img/work2.jpg",
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
    image: "/assets/img/work3.jpg",
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
    image: "/assets/img/work4.jpg",
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
    image: "/assets/img/work5.jpg",
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
    image: "/assets/img/work6.jpg",
    link: "https://weather-dashboard-six-steel.vercel.app/",
    github: "https://github.com/yourusername/weather-app",
    accentFrom: "#d97706",
    accentTo: "#ea580c",
    category: "design",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Movil", value: "movil" },
  { label: "Design", value: "design" },
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

/* ─── Section ─────────────────────────────────────────────────────── */
export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visible = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter,
  );

  return (
    <section className="work section" id="work">
      <span className="section__subtitle">My Portfolio</span>
      <h2 className="section__title">Recent Works</h2>

      {/* Filter buttons */}
      <div className="work__filters">
        {filters.map((f) => (
          <span
            key={f.value}
            className={`work__item${activeFilter === f.value ? " active-work" : ""}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </span>
        ))}
      </div>

      {/* Project cards grid */}
      <div className="work__container container grid">
        {visible.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
