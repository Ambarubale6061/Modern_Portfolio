const experienceData = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2022 – Present",
    description:
      "Leading the frontend development team, building scalable React & Next.js applications, implementing pixel-perfect UI/UX designs, and mentoring junior developers across multiple product lines.",
    icon: "bx bx-briefcase-alt-2",
  },
  {
    title: "Frontend Developer",
    company: "Creative Digital Agency",
    period: "2020 – 2022",
    description:
      "Developed fully responsive web applications using React, collaborated closely with designers to implement accessible UI components, and improved site performance by 40% through code optimisation.",
    icon: "bx bx-code-alt",
  },
  {
    title: "UI/UX Designer & Developer",
    company: "Digital Studio",
    period: "2018 – 2020",
    description:
      "Designed and developed user interfaces for web and mobile platforms, created wireframes and interactive prototypes, and delivered end-to-end design-to-code solutions for 20+ client projects.",
    icon: "bx bx-paint",
  },
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <span className="section__subtitle">My Journey</span>
      <h2 className="section__title">Experience</h2>

      <div className="experience__container">
        {experienceData.map((item, index) => (
          <div className="experience__card" key={index}>
            <div className="experience__header">
              <div className="experience__icon-box">
                <i className={`${item.icon} experience__icon`}></i>
              </div>

              <div className="experience__info">
                <h3 className="experience__title">{item.title}</h3>
                <span className="experience__company">{item.company}</span>
              </div>
            </div>

            <span className="experience__period">
              <i className="bx bx-calendar experience__period-icon"></i>
              {item.period}
            </span>

            <p className="experience__description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
