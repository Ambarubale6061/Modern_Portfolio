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
    iconClass: "bx bxl-twitter",
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
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="footer__container container">
        <h1 className="footer__title">
          Ambar <span style={{ color: "#3b82f6" }}>Ubale</span>
        </h1>

        <p className="footer__subtitle">
          Full Stack Developer crafting scalable software and AI-driven
          solutions for real-world problems.
        </p>

        <ul className="footer__list">
          {footerLinks.map((link, idx) => (
            <li className="footer__item" key={idx}>
              <a href={link.href} className="footer__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

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

        <span className="footer__copy">
          &#169; {currentYear} Ambar Ubale | All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

const styles = `
  .footer { background-color: #060913 !important; border-top: 1px solid rgba(255, 255, 255, 0.03); transition: background-color 0.4s; }
  .footer__container { padding: 3.5rem 0 6rem; display: flex; flex-direction: column; align-items: center; text-align: center; }
  .footer__title, .footer__link { color: #f1f5f9 !important; transition: 0.3s; }
  .footer__title { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; }
  .footer__subtitle { color: #94a3b8 !important; font-size: var(--small-font-size); max-width: 450px; line-height: 1.6; margin-bottom: 2rem; font-weight: 400; }
  .footer__link:hover { color: #3b82f6 !important; }
  .footer__list { display: flex; justify-content: center; align-items: center; column-gap: 1.5rem; margin-bottom: 2.5rem; flex-wrap: wrap; row-gap: 0.5rem; }
  .footer__social { display: flex; justify-content: center; align-items: center; column-gap: 1.25rem; }
  .footer__social-link { background-color: #0e1424 !important; color: #94a3b8 !important; width: 2.75rem; height: 2.75rem; border-radius: 50% !important; font-size: 1.25rem; display: inline-flex; align-items: center; justify-content: center; border: 1px solid rgba(255, 255, 255, 0.05); transition: all 0.3s ease; }
  .footer__social-github:hover { background-color: #000000 !important; color: #ffffff !important; border-color: #000000; transform: translateY(-4px) scale(1.1); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3); }
  .footer__social-linkedin:hover { background-color: #002ca5 !important; color: #ffffff !important; border-color: #002ca5; transform: translateY(-4px) scale(1.1); box-shadow: 0 10px 15px -3px rgba(2, 132, 199, 0.3); }
  .footer__social-twitter:hover { background-color: #0ea5e9 !important; color: #ffffff !important; border-color: #0ea5e9; transform: translateY(-4px) scale(1.1); box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.3); }
  .footer__social-instagram:hover { background-color: #db2777 !important; color: #ffffff !important; border-color: #db2777; transform: translateY(-4px) scale(1.1); box-shadow: 0 10px 15px -3px rgba(219, 39, 119, 0.3); }
  .footer__social-whatsapp:hover { background-color: #059669 !important; color: #ffffff !important; border-color: #059669; transform: translateY(-4px) scale(1.1); box-shadow: 0 10px 15px -3px rgba(5, 150, 105, 0.3); }
  .footer__copy { display: block; margin-top: 4.5rem; color: #64748b !important; text-align: center; font-size: var(--smaller-font-size); margin-bottom: 2rem; letter-spacing: 1px; }
  @media screen and (min-width: 992px) {
    .footer__title { font-size: 1.75rem; }
    .footer__social-link { width: 3rem; height: 3rem; font-size: 1.5rem; }
  }
`;
