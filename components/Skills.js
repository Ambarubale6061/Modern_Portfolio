"use client";
import React, { useState, useEffect, memo } from "react";
import {
  Atom,
  Layers,
  FileCode,
  Sparkles,
  Server,
  Cpu,
  Database as DbIcon,
  Zap,
  Braces,
  Boxes,
  Code2,
  Cloud,
  ShieldCheck,
  Workflow,
  Layout,
  Globe,
  Terminal,
  Share2,
  HardDrive,
  Key,
  GitBranch,
  MessageSquare,
  Lightbulb,
  GitCommit,
  Package,
  Hash,
  Laptop,
  SearchCode,
  PenTool,
  Code,
} from "lucide-react";

const skillData = {
  interface: [
    { name: "React", Icon: Atom, color: "#0ea5e9" },
    { name: "Next.js", Icon: Layers, color: "#a3a3a3" },
    { name: "TypeScript", Icon: FileCode, color: "#3b82f6" },
    { name: "Tailwind", Icon: Sparkles, color: "#06b6d4" },
    { name: "Framer", Icon: Layout, color: "#ec4899" },
    { name: "Three.js", Icon: Boxes, color: "#6366f1" },
    { name: "Figma", Icon: PenTool, color: "#f24e1e" },
    { name: "HTML5", Icon: Globe, color: "#f97316" },
    { name: "CSS3", Icon: Laptop, color: "#3b82f6" },
    { name: "Zustand", Icon: Workflow, color: "#d97706" },
  ],
  core: [
    { name: "Node.js", Icon: Server, color: "#10b981" },
    { name: "Python", Icon: Code2, color: "#eab308" },
    { name: "AI Agents", Icon: Code, color: "#a855f7" },
    { name: "OpenAI", Icon: Lightbulb, color: "#10a37f" },
    { name: "Go", Icon: Terminal, color: "#00add8" },
    { name: "FastAPI", Icon: Zap, color: "#059669" },
    { name: "GraphQL", Icon: Share2, color: "#e10098" },
    { name: "Microservices", Icon: Cpu, color: "#f59e0b" },
    { name: "LangChain", Icon: GitBranch, color: "#6366f1" },
    { name: "Express", Icon: Server, color: "#475569" },
  ],
  data: [
    { name: "PostgreSQL", Icon: DbIcon, color: "#6366f1" },
    { name: "Supabase", Icon: Zap, color: "#3ecf8e" },
    { name: "MongoDB", Icon: HardDrive, color: "#16a34a" },
    { name: "Redis", Icon: Zap, color: "#ef4444" },
    { name: "Prisma", Icon: Braces, color: "#a3a3a3" },
    { name: "Firebase", Icon: Cloud, color: "#f59e0b" },
    { name: "Elastic", Icon: SearchCode, color: "#f97316" },
    { name: "Vector DB", Icon: Hash, color: "#8b5cf6" },
    { name: "Neo4j", Icon: GitBranch, color: "#0284c7" },
    { name: "Vault", Icon: Key, color: "#d97706" },
  ],
  workflow: [
    { name: "Docker", Icon: Boxes, color: "#2496ed" },
    { name: "AWS", Icon: Cloud, color: "#f97316" },
    { name: "Git", Icon: GitCommit, color: "#f05032" },
    { name: "Vercel", Icon: Zap, color: "#a3a3a3" },
    { name: "Actions", Icon: Workflow, color: "#2088ff" },
    { name: "Linux", Icon: Terminal, color: "#ca8a04" },
    { name: "Postman", Icon: MessageSquare, color: "#ef6c37" },
    { name: "K8s", Icon: Package, color: "#326ce5" },
    { name: "Security", Icon: ShieldCheck, color: "#10b981" },
    { name: "Nginx", Icon: Server, color: "#009639" },
  ],
};

const CARDS = [
  { key: "interface", title: "Interface & Experience" },
  { key: "core", title: "Core & Intelligence" },
  { key: "data", title: "Data & Persistence" },
  { key: "workflow", title: "DevOps & Workflow" },
];

const SkillCardAnimation = memo(function SkillCardAnimation({ skills, title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev - 1 + skills.length) % skills.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [skills.length, isHovered]);

  return (
    <div
      className="skills__content"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic background glow */}
      <div
        className="skills__glow"
        style={{
          background: `radial-gradient(circle at center, ${
            skills[activeIndex]?.color || "#3b82f6"
          } 0%, transparent 70%)`,
        }}
      />

      <h3 className="skills__title">{title}</h3>

      {/* 3D carousel stage */}
      <div className="skills__box">
        {skills.map((skill, index) => {
          let offset = index - activeIndex;
          if (offset < -skills.length / 2) offset += skills.length;
          if (offset > skills.length / 2) offset -= skills.length;

          const isCenter = offset === 0;
          const isLeft = offset === -1 || (offset < -1 && offset >= -2);
          const isRight = offset === 1 || (offset > 1 && offset <= 2);

          let translateX = 0;
          let translateZ = -200;
          let rotateY = 0;
          let opacity = 0;

          if (isCenter) {
            translateX = 0;
            translateZ = 0;
            rotateY = 0;
            opacity = 1;
          } else if (isLeft) {
            translateX = -95;
            translateZ = -100;
            rotateY = 25;
            opacity = 0.35;
          } else if (isRight) {
            translateX = 95;
            translateZ = -100;
            rotateY = -25;
            opacity = 0.35;
          }

          return (
            <div
              key={skill.name}
              className="skills__data"
              style={{
                transform: `translate3d(${translateX}px, 0px, ${translateZ}px) rotateY(${rotateY}deg)`,
                opacity,
                zIndex: isCenter ? 100 : 20,
                filter: isCenter ? "none" : "blur(0.5px)",
                pointerEvents: isCenter ? "auto" : "none",
                borderColor: isCenter ? `${skill.color}44` : "rgba(0,0,0,0.06)",
                boxShadow: isCenter
                  ? `0 12px 24px -10px ${skill.color}30`
                  : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                rowGap: "0.55rem" /* गॅप वाढवला (0.35 वरून 0.55 केला) */,
                padding: "0.85rem 0.5rem",
                width: "115px",
                height: "115px",
              }}
            >
              <div
                className="skills__icon-wrap"
                style={{
                  color: isCenter ? skill.color : "var(--text-color-light)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "36px",
                  height: "36px",
                }}
              >
                <skill.Icon size={35} strokeWidth={1.4} />
              </div>

              <div
                className="skills__info"
                style={{ textAlign: "center", width: "100%" }}
              >
                <h3
                  className="skills__name"
                  style={{
                    color: isCenter
                      ? "var(--title-color)"
                      : "var(--text-color-light)",
                    fontSize: "0.72rem" /* टेक्स्ट अजून थोडा बारीक केला */,
                    fontWeight: "500",
                    margin: 0,
                  }}
                >
                  {skill.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <span className="section__subtitle">My Expertise</span>
      <h2 className="section__title">Skills & Technologies</h2>

      <div className="skills__container container grid">
        {CARDS.map((card) => (
          <SkillCardAnimation
            key={card.key}
            skills={skillData[card.key] || []}
            title={card.title}
          />
        ))}
      </div>
    </section>
  );
}
