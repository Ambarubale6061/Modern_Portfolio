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

const skillsStyles = `
/*=============== SKILLS ===============*/
.skills__container {
  row-gap: 2.5rem;
  padding-top: 1rem;
}

.skills__content {
  background-color: var(--container-color);
  padding: 1.5rem 1rem;
  border-radius: 1.25rem;
  position: relative;
  height: 290px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition:
    background-color 0.4s ease,
    box-shadow 0.4s ease;
}

.skills__title {
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  color: var(--first-color);
  text-align: center;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 30;
}

/* 3D Stage */
.skills__box {
  position: relative;
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 800px;
  transform-style: preserve-3d;
}

/* Individual rotating skill card */
.skills__data {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 0.55rem;
  background-color: var(--skills-data-bg);
  padding: 0.85rem 0.5rem;
  border-radius: 0.6rem;
  border: 1px solid transparent;
  width: 115px;
  height: 115px;
  will-change: transform;
  transform-style: preserve-3d;
  transition:
    transform 850ms cubic-bezier(0.25, 1, 0.5, 1),
    opacity 850ms cubic-bezier(0.25, 1, 0.5, 1),
    filter 850ms cubic-bezier(0.25, 1, 0.5, 1),
    background-color 0.4s ease;
}

:root {
  --skills-data-bg: hsl(var(--second-hue), 48%, 8%);
}

body.light-theme {
  --skills-data-bg: #ffffff;
}

.skills__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  transition: color 500ms ease;
}

.skills__info {
  overflow: hidden;
  text-align: center;
  width: 100%;
}

.skills__name {
  font-size: 0.72rem;
  font-weight: var(--font-medium);
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.skills__level {
  font-size: var(--smaller-font-size);
  color: var(--text-color-light);
  display: block;
}

/* Background glow effect */
.skills__glow {
  position: absolute;
  inset: 0;
  opacity: 0.06;
  filter: blur(50px);
  pointer-events: none;
  transition: background 1000ms ease-in-out;
}

body.light-theme .skills__glow {
  opacity: 0.1;
}

/*========== Light theme overrides: Skills ==========*/
.light-theme .skills__content {
  box-shadow: 0 2px 16px hsla(var(--second-hue), 48%, 8%, 0.1);
}

/*=============== SKILLS BREAKPOINTS ===============*/
@media screen and (max-width: 350px) {
  .skills__data {
    width: 100px;
    height: 100px;
    padding: 0.6rem 0.4rem;
    row-gap: 0.4rem;
  }
  .skills__icon-wrap {
    width: 30px;
    height: 30px;
  }
  .skills__name {
    font-size: 0.68rem;
  }
}

@media screen and (min-width: 630px) {
  .skills__container {
    justify-content: center;
  }
  .skills__content {
    padding: 2rem 2.5rem;
    height: 310px;
  }
  .skills__title {
    font-size: var(--h3-font-size);
  }
}

@media screen and (min-width: 992px) {
  .skills__container {
    grid-template-columns: repeat(2, 440px);
    column-gap: 2.5rem;
  }
}
`;

const skillData = {
  interface: [
    { name: "React", Icon: Atom, color: "#0ea5e9" },
    { name: "Next.js", Icon: Layers, color: "#a3a3a3" },
    { name: "TypeScript", Icon: FileCode, color: "#3b82f6" },
    { name: "Tailwind", Icon: Sparkles, color: "#06b6d4" },
    { name: "Framer", Icon: Layout, color: "#ec4899" },
    { name: "Three.js", Icon: Boxes, color: "#6366f1" },
    { name: "HTML5", Icon: Globe, color: "#f97316" },
    { name: "CSS3", Icon: Laptop, color: "#3b82f6" },
    { name: "Zustand", Icon: Workflow, color: "#d97706" },
    { name: "TanStack", Icon: Database, color: "#ff4154" },
  ],
  core: [
    { name: "JavaScript", Icon: FileCode, color: "#f7df1e" },
    { name: "Java", Icon: Coffee, color: "#007396" },
    { name: "C", Icon: Terminal, color: "#59666c" },
    { name: "Node.js", Icon: Server, color: "#10b981" },
    { name: "Express", Icon: Server, color: "#475569" },
    { name: "Spring Boot", Icon: Zap, color: "#6db33f" },
    { name: "AI Agents", Icon: Code, color: "#a855f7" },
    { name: "OpenAI", Icon: Lightbulb, color: "#10a37f" },
    { name: "FastAPI", Icon: Zap, color: "#059669" },
    { name: "Microservices", Icon: Cpu, color: "#f59e0b" },
    { name: "REST APIs", Icon: Share2, color: "#6366f1" },
    { name: "WebRTC", Icon: Video, color: "#000000" },
  ],
  data: [
    { name: "Supabase", Icon: Zap, color: "#3ecf8e" },
    { name: "Firebase", Icon: Cloud, color: "#f59e0b" },
    { name: "MongoDB", Icon: HardDrive, color: "#16a34a" },
    { name: "PostgreSQL", Icon: DbIcon, color: "#6366f1" },
    { name: "Redis", Icon: Zap, color: "#ef4444" },
    { name: "Vector DB", Icon: Hash, color: "#8b5cf6" },
    { name: "Prisma", Icon: Braces, color: "#a3a3a3" },
    { name: "GraphQL", Icon: Share2, color: "#e10098" },
  ],
  workflow: [
    { name: "Git", Icon: GitCommit, color: "#f05032" },
    { name: "GitHub", Icon: Github, color: "#181717" },
    { name: "Docker", Icon: Boxes, color: "#2496ed" },
    { name: "AWS", Icon: Cloud, color: "#f97316" },
    { name: "Vercel", Icon: Zap, color: "#a3a3a3" },
    { name: "Maven", Icon: Package, color: "#c71a36" },
    { name: "IntelliJ", Icon: Code2, color: "#000000" },
    { name: "VS Code", Icon: Laptop, color: "#007acc" },
    { name: "Postman", Icon: MessageSquare, color: "#ef6c37" },
    { name: "Security", Icon: ShieldCheck, color: "#10b981" },
    { name: "Vitest", Icon: TestTube, color: "#8b5cf6" },
    { name: "Supabase Edge", Icon: Zap, color: "#3ecf8e" },
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
      <div
        className="skills__glow"
        style={{
          background: `radial-gradient(circle at center, ${
            skills[activeIndex]?.color || "#2563eb"
          } 0%, transparent 70%)`,
        }}
      />

      <h3 className="skills__title">{title}</h3>

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
                rowGap: "0.55rem",
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
                    fontSize: "0.72rem",
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
    <>
      <style dangerouslySetInnerHTML={{ __html: skillsStyles }} />
      <section className="skills section" id="skills">
        <span className="section__subtitle">My Expertise</span>
        <h2 className="section__title">Skills &amp; Technologies</h2>

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
    </>
  );
}
