"use client";

import { useEffect } from "react";

/**
 * Renders nothing visually.
 * Dynamically imports ScrollReveal (browser-only) and wires up
 * reveal effects for all sections.
 *
 * Changes from original:
 *  - reset: false  → animations fire once and stay; avoids re-trigger jank
 *    when scrolling back up through sections.
 *  - Shorter duration (1800ms) for a snappier, more modern feel.
 *  - Services cards target the new .services__premium-card class.
 *  - Staggered interval on work cards and experience cards for a
 *    cascade effect.
 */
export default function Animations() {
  useEffect(() => {
    import("scrollreveal").then(({ default: ScrollReveal }) => {
      const sr = ScrollReveal({
        origin: "top",
        distance: "50px",
        duration: 1800,
        delay: 300,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        reset: false, // fire once — no re-trigger jank on scroll-up
      });

      /* ── Header nav ── */
      sr.reveal(".nav__menu", {
        delay: 100,
        scale: 0.1,
        origin: "bottom",
        distance: "300px",
      });

      /* ── Home ── */
      sr.reveal(".home__data");
      sr.reveal(".home__handle", { delay: 150 });
      sr.reveal(".home__social, .home__scroll", {
        delay: 200,
        origin: "bottom",
      });

      /* ── About ── */
      sr.reveal(".about__img", {
        delay: 100,
        origin: "left",
        scale: 0.92,
        distance: "40px",
      });
      sr.reveal(".about__info", {
        delay: 150,
        origin: "right",
        scale: 0.92,
        distance: "40px",
      });
      sr.reveal(".about__description", {
        delay: 200,
        origin: "right",
        scale: 0.95,
        distance: "30px",
      });
      sr.reveal(".about__button-contact", {
        delay: 250,
        origin: "right",
        scale: 0.95,
        distance: "30px",
      });

      /* ── Skills ── */
      sr.reveal(".skills__content", {
        delay: 100,
        scale: 0.93,
        origin: "bottom",
        distance: "30px",
        interval: 120,
      });

      /* ── Services ── */
      sr.reveal(".services__premium-card", {
        delay: 100,
        scale: 0.92,
        origin: "bottom",
        distance: "30px",
        interval: 100,
      });

      /* ── Work ── */
      sr.reveal(".work__card", {
        delay: 100,
        scale: 0.93,
        origin: "bottom",
        distance: "30px",
        interval: 110,
      });

      /* ── Experience ── */
      sr.reveal(".experience__card", {
        delay: 100,
        scale: 0.93,
        origin: "left",
        distance: "40px",
        interval: 150,
      });

      /* ── Testimonials ── */
      sr.reveal(".testimonial__container", {
        delay: 100,
        scale: 0.93,
        origin: "bottom",
        distance: "30px",
      });

      /* ── Contact ── */
      sr.reveal(".contact__info, .contact__title-info", {
        delay: 100,
        scale: 0.93,
        origin: "left",
        distance: "30px",
      });
      sr.reveal(".contact__form, .contact__title-form", {
        delay: 100,
        scale: 0.93,
        origin: "right",
        distance: "30px",
      });

      /* ── Footer ── */
      sr.reveal(".footer__container", {
        delay: 100,
        scale: 0.95,
        origin: "bottom",
        distance: "20px",
      });
    });
  }, []);

  return null;
}
