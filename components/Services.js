'use client'

import { useState } from 'react'

const servicesData = [
  {
    title: 'Product\nDesigning',
    modalTitle: 'Product Designing',
    description:
      "I design and develop the consumer products with creative ability and hands-on approach which satisfies the customers' and markets' needs and trends.",
    items: [
      'I develop the user interfaces.',
      'Web Page design and development.',
      'I create the UX element interactions.',
      'I position your company brand.',
      'Create modern 3-D experiences.',
    ],
  },
  {
    title: 'UI/UX\nDesigning',
    modalTitle: 'UI/UX Designing',
    description:
      "I design and develop the consumer products with creative ability and hands-on approach which satisfies the customers' and markets' needs and trends.",
    items: [
      'I develop the user interfaces.',
      'Web Page design and development.',
      'I create the UX element interactions.',
      'I position your company brand.',
      'Create modern 3-D experiences.',
    ],
  },
  {
    title: 'Visual\nDesigning',
    modalTitle: 'Visual Designing',
    description:
      "I design and develop the consumer products with creative ability and hands-on approach which satisfies the customers' and markets' needs and trends.",
    items: [
      'I develop the user interfaces.',
      'Web Page design and development.',
      'I create the UX element interactions.',
      'I position your company brand.',
      'Create modern 3-D experiences.',
    ],
  },
]

export default function Services() {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = (index) => setActiveModal(index)
  const closeModal = () => setActiveModal(null)

  return (
    <section className="services section">
      <span className="section__subtitle">My Services</span>
      <h2 className="section__title">What I Offer</h2>

      <div className="services__container container grid">
        {servicesData.map((service, index) => (
          <div className="services__card" key={index}>
            <h3 className="services__title">
              {service.title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < service.title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h3>

            <span
              className="services__button"
              onClick={() => openModal(index)}
            >
              See More{' '}
              <i className="bx bx-right-arrow services__icon"></i>
            </span>

            {/* Modal */}
            <div
              className={`services__modal ${
                activeModal === index ? 'active-modal' : ''
              }`}
            >
              <div className="services__modal-content">
                <i
                  className="bx bx-x services__modal-close"
                  onClick={closeModal}
                ></i>

                <h3 className="services__modal-title">
                  {service.modalTitle}
                </h3>

                <p className="services__modal-description">
                  {service.description}
                </p>

                <ul className="services__modal-list">
                  {service.items.map((item, i) => (
                    <li className="services__modal-item" key={i}>
                      <i className="bx bx-check-circle"></i>
                      <p className="services__modal-info">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
