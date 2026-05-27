'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

// Swiper core CSS
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    img: '/assets/img/testimonial1.png',
    name: 'Jhon Doe',
    description:
      'A really good job, all aspects of the project were done well. Very creative and thoughtful. I was very impressed and would recommend this to anyone.',
  },
  {
    img: '/assets/img/testimonial2.png',
    name: 'Ada Hill',
    description:
      'A really good job, all aspects of the project were done well. Very creative and thoughtful. I was very impressed and would recommend this to anyone.',
  },
  {
    img: '/assets/img/testimonial3.png',
    name: 'Jessica Park',
    description:
      'A really good job, all aspects of the project were done well. Very creative and thoughtful. I was very impressed and would recommend this to anyone.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonial section">
      <span className="section__subtitle">My clients say</span>
      <h2 className="section__title">Testimonials</h2>

      <Swiper
        className="testimonial__container container"
        modules={[Pagination]}
        spaceBetween={24}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2, spaceBetween: 48 },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="testimonial__card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.img} alt={t.name} className="testimonial__img" />
            <h3 className="testimonial__name">{t.name}</h3>
            <p className="testimonial__description">{t.description}</p>
          </SwiperSlide>
        ))}

        {/* Pagination must be a child of Swiper when using custom el */}
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  )
}
