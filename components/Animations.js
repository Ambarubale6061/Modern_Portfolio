"use client";

import { useEffect } from "react";

/**
 * Renders nothing visually.
 * Dynamically imports ScrollReveal (browser-only) and wires up
 * all the same reveal effects that were in the original main.js,
 * plus the new Experience section.
 */
export default function Animations() {
  useEffect(() => {
    import("scrollreveal").then(({ default: ScrollReveal }) => {
      const sr = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 2500,
        delay: 400,
        reset: true,
      });

      sr.reveal(".nav__menu", {
        delay: 100,
        scale: 0.1,
        origin: "bottom",
        distance: "300px",
      });

      sr.reveal(".home__data");

      sr.reveal(".home__handle", { delay: 100 });

      sr.reveal(".home__social, .home__scroll", {
        delay: 100,
        origin: "bottom",
      });

      sr.reveal(".about__img", {
        delay: 100,
        origin: "left",
        scale: 0.9,
        distance: "30px",
      });

      sr.reveal(".about__data, .about__description, .about__button-contact", {
        delay: 100,
        scale: 0.9,
        origin: "right",
        distance: "30px",
      });

      sr.reveal(".skills__content", {
        delay: 100,
        scale: 0.9,
        origin: "bottom",
        distance: "30px",
      });

      sr.reveal(".services__title, .services__button", {
        delay: 100,
        scale: 0.9,
        origin: "top",
        distance: "30px",
      });

      sr.reveal(".work__card", {
        delay: 100,
        scale: 0.9,
        origin: "bottom",
        distance: "30px",
      });

      sr.reveal(".experience__card", {
        delay: 100,
        scale: 0.9,
        origin: "left",
        distance: "40px",
        interval: 150,
      });

      sr.reveal(".testimonial__container", {
        delay: 100,
        scale: 0.9,
        origin: "bottom",
        distance: "30px",
      });

      sr.reveal(".contact__info, .contact__title-info", {
        delay: 100,
        scale: 0.9,
        origin: "left",
        distance: "30px",
      });

      sr.reveal(".contact__form, .contact__title-form", {
        delay: 100,
        scale: 0.9,
        origin: "right",
        distance: "30px",
      });

      sr.reveal(".footer, .footer__container", {
        delay: 100,
        scale: 0.9,
        origin: "bottom",
        distance: "30px",
      });
    });
  }, []);

  return null;
}
