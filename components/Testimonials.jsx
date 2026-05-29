"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonialsStyles = `
/*=============== TESTIMONIAL ===============*/
.testimonial__container {
  padding-bottom: 4.5rem !important;
  position: relative;
}

.testimonial__container .swiper-wrapper {
  display: flex !important;
  align-items: stretch !important;
}

.testimonial__slide {
  height: auto !important;
  display: flex !important;
}

.testimonial__card {
  background-color: var(--container-color);
  padding: 2rem;
  border-radius: 1.25rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: 1px solid hsla(var(--first-hue), var(--sat), var(--lig), 0.05);
  transition: transform 0.3s ease;
  box-sizing: border-box;
}

.testimonial__card:hover {
  transform: translateY(-4px);
}

.testimonial__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.testimonial__quote {
  font-family: serif;
  font-size: 3.5rem;
  line-height: 1;
  color: var(--first-color);
  user-select: none;
}

.testimonial__company-badge {
  font-size: 0.65rem;
  font-weight: var(--font-bold);
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--first-color);
  background-color: hsla(var(--first-hue), var(--sat), var(--lig), 0.1);
  padding: 0.3rem 0.75rem;
  border-radius: 5rem;
  border: 1px solid hsla(var(--first-hue), var(--sat), var(--lig), 0.15);
}

.testimonial__description {
  font-size: var(--small-font-size);
  color: var(--text-color);
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.testimonial__profile {
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  padding-top: 1.25rem;
  border-top: 1px solid hsla(var(--first-hue), var(--sat), var(--lig), 0.08);
}

.testimonial__avatar-box {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background-color: var(--body-color);
  border: 2px solid hsla(var(--first-hue), var(--sat), var(--lig), 0.15);
}

.testimonial__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial__avatar-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(var(--first-hue), var(--sat), var(--lig), 0.2);
  color: var(--first-color);
  font-size: var(--smaller-font-size);
  font-weight: var(--font-bold);
}

.testimonial__meta {
  display: flex;
  flex-direction: column;
}

.testimonial__name {
  font-size: var(--normal-font-size);
  font-weight: var(--font-semibold);
  color: var(--title-color);
  margin-bottom: 0.15rem;
}

.testimonial__role {
  font-size: var(--smaller-font-size);
  color: var(--text-color-light);
  font-weight: var(--font-medium);
}

.testimonial__container .swiper-pagination {
  bottom: 1rem !important;
}

.swiper-pagination-bullet {
  background-color: var(--text-color-light);
  opacity: 0.3;
  transition:
    background-color 0.3s,
    opacity 0.3s;
}

.swiper-pagination-bullet-active {
  background-color: var(--first-color);
  opacity: 1;
}

.light-theme .testimonial__card {
  box-shadow: 0 4px 20px hsla(var(--second-hue), 48%, 8%, 0.04);
}

/*=============== TESTIMONIAL BREAKPOINTS ===============*/

/* Very small phones */
@media screen and (max-width: 360px) {
  .testimonial__container {
    padding-bottom: 5rem !important;
    margin-left: 1rem !important;
    margin-right: 1rem !important;
    width: auto !important;
  }

  .testimonial__card {
    padding: 1.25rem;
    margin-bottom: 1.5rem;
  }

  .testimonial__quote {
    font-size: 2.75rem;
  }

  .testimonial__description {
    font-size: var(--smaller-font-size);
  }

  .testimonial__container .swiper-pagination {
    bottom: 0.5rem !important;
  }
}

/* Standard mobile */
@media screen and (max-width: 576px) {
  .testimonial__container {
    padding-bottom: 5rem !important;
    margin-left: 1rem !important;
    margin-right: 1rem !important;
    width: auto !important;
  }

  .testimonial__card {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .testimonial__container .swiper-pagination {
    bottom: 0.5rem !important;
  }
}

@media screen and (min-width: 630px) {
  .testimonial__container {
    width: 600px;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}

@media screen and (min-width: 768px) {
  .testimonial__container {
    width: 720px;
  }
}

@media screen and (min-width: 992px) {
  .testimonial__container {
    width: 950px;
  }
}
`;

const testimonialsData = [
  {
    name: "Pushkraj Musmade",
    role: "Software Engineer",
    company: "BharatGo",
    image: "/pushkraj.jpeg",
    text: "Ambar combines technical knowledge with a strong understanding of modern web design. He is dependable, hardworking, and always ready to learn new technologies.",
  },
  {
    name: "Amol Kshirsagar",
    role: "Digital Engineering Staff Engineer",
    company: "NTT DATA",
    image: "/amol.jpg",
    text: "Ambar is a focused frontend developer with a good understanding of modern UI practices. He builds clean and responsive interfaces and is always eager to learn and improve.",
  },
  {
    name: "Durgesh Gadekar",
    role: "AEM Producer",
    company: "Accenture",
    image: "/durgesh.jpg",
    text: "Ambar is passionate about development and consistently delivers high-quality work. His dedication, creativity, and teamwork skills make him stand out as a developer.",
  },
  {
    name: "Amrut Kshirsagar",
    role: "Staff Engineer",
    company: "Altimetrik",
    image: "/amrut.jpg",
    text: "Ambar is a driven and talented full-stack developer with a great problem-solving mindset. He consistently delivers high-quality work and has a strong grip on technologies like React, Node.js, and modern web tools.",
  },
  {
    name: "Suresh Kandelkar",
    role: "Android Developer",
    company: "Freelance",
    image: "/suresh.jpg",
    text: "Ambar is reliable, skilled, and always eager to learn new technologies. He's the kind of developer who makes teamwork smooth and results outstanding.",
  },
];

export default function Testimonials() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: testimonialsStyles }} />
      <section className="testimonial section" id="testimonials">
        <span className="section__subtitle">
          Kind words from Satisfied Clients
        </span>
        <h2 className="section__title">Testimonials</h2>

        <Swiper
          className="testimonial__container container"
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          autoHeight={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          breakpoints={{
            576: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 32 },
            992: { slidesPerView: 2, spaceBetween: 48 },
          }}
        >
          {testimonialsData.map((t, i) => (
            <SwiperSlide key={i} className="testimonial__slide">
              <div className="testimonial__card">
                <div className="testimonial__header">
                  <span className="testimonial__quote">&ldquo;</span>
                  <span className="testimonial__company-badge">
                    {t.company}
                  </span>
                </div>

                <p className="testimonial__description">{t.text}</p>

                <div className="testimonial__profile">
                  <div className="testimonial__avatar-box">
                    {t.image ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={t.image}
                        alt={t.name}
                        className="testimonial__img"
                      />
                    ) : (
                      <div className="testimonial__avatar-fallback">
                        {t.name.substring(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>

                  <div className="testimonial__meta">
                    <h3 className="testimonial__name">{t.name}</h3>
                    <span className="testimonial__role">{t.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination"></div>
        </Swiper>
      </section>
    </>
  );
}
