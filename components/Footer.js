"use client";

import React, { useState, useEffect } from "react";

const footerLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const socialMediaLinks = [
  {
    name: "github",
    iconClass: "bx bxl-github",
    href: "https://github.com/Ambarubale6061",
    colorClass: "footer__social-github",
  },
  {
    name: "linkedin",
    iconClass: "bx bxl-linkedin",
    href: "https://www.linkedin.com/in/ambar-ubale-137214230",
    colorClass: "footer__social-linkedin",
  },
  {
    name: "twitter",
    iconClass: "bx bxl-twitter", // Twitter आयकॉन परत जोडला
    href: "https://x.com/UbaleAmbar",
    colorClass: "footer__social-twitter",
  },
  {
    name: "instagram",
    iconClass: "bx bxl-instagram",
    href: "https://www.instagram.com/ambar_ubale/",
    colorClass: "footer__social-instagram",
  },
  {
    name: "whatsapp",
    iconClass: "bx bxl-whatsapp",
    href: "https://wa.me/919579377966?text=Hi%20Ambar%20Ubale,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!",
    colorClass: "footer__social-whatsapp",
  },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* Brand Name Title (Lahan Size) */}
        <h1 className="footer__title">
          Ambar <span style={{ color: "#3b82f6" }}>Ubale</span>
        </h1>

        {/* Subtitle Headline */}
        <p className="footer__subtitle">
          Full Stack Developer crafting scalable software and AI-driven
          solutions for real-world problems.
        </p>

        {/* --- Navigation List --- */}
        <ul className="footer__list">
          {footerLinks.map((link, idx) => (
            <li className="footer__item" key={idx}>
              <a href={link.href} className="footer__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* --- Circle Social Icons Grid --- */}
        <ul className="footer__social">
          {socialMediaLinks.map((social, idx) => (
            <li className="footer__social-item" key={idx}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`footer__social-link ${social.colorClass}`}
              >
                <i className={`${social.iconClass} footer__social-icon`}></i>
              </a>
            </li>
          ))}
        </ul>

        {/* --- Copyright Text --- */}
        <span className="footer__copy">
          &#169; {currentYear} Ambar Ubale | All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
