"use client";

import React, { useState } from "react";

const contactStyles = `
/*=============== CONTACT ===============*/
.contact__container {
  row-gap: 3rem;
  padding-bottom: 3rem;
}

.contact__title {
  text-align: center;
  font-size: var(--h3-font-size);
  margin-bottom: 1.5rem;
}

.contact__info {
  display: grid;
  gap: 1rem;
}

.contact__card {
  background-color: var(--container-color);
  padding: 2rem 1rem;
  border-radius: 0.75rem;
  text-align: center;
  transition: background-color 0.4s ease;
}

.contact__card-icon {
  font-size: 2rem;
  color: var(--title-color);
  margin-bottom: 0.25rem;
}

.contact__card-title,
.contact__card-data {
  font-size: var(--small-font-size);
}

.contact__card-title {
  font-weight: var(--font-medium);
}

.contact__card-data {
  display: block;
  margin-bottom: 0.75rem;
}

.contact__button {
  color: var(--first-color);
  font-size: var(--small-font-size);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.25rem;
  cursor: pointer;
}

.contact__button:hover .contact__button-icon {
  transform: translateX(0.25rem);
}

.contact__button-icon {
  font-size: 1rem;
  transition: 0.4s;
}

.contact__form-div {
  position: relative;
  margin-bottom: 2rem;
  height: 4rem;
}

.contact__form-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid var(--text-color-light);
  background: none;
  border-radius: 0.75rem;
  padding: 1.5rem;
  font-size: var(--normal-font-size);
  color: var(--text-color);
  outline: none;
  z-index: 1;
  transition: border-color 0.3s ease;
}

.contact__form-input:focus {
  border-color: var(--first-color);
}

.contact__form-tag {
  position: absolute;
  top: -0.75rem;
  left: 1.25rem;
  font-size: var(--smaller-font-size);
  padding: 0.25rem;
  background-color: var(--body-color);
  z-index: 10;
}

.contact__form-area {
  height: 17rem;
}

.contact__form-area textarea {
  resize: none;
}

.contact__form-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
  background-color: #0f172a;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: var(--font-bold);
  font-size: var(--small-font-size);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.contact__form-button:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
}

.contact__btn-icon {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.contact__form-button:hover .contact__btn-icon {
  transform: translate(2px, -2px);
}

.contact__btn-spinner {
  font-size: 1rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.contact__status-message {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  margin-bottom: 1.5rem;
  animation: contactFade 0.4s ease-in-out;
}

.contact__status-success {
  background-color: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  color: #10b981;
}

.contact__status-error {
  background-color: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

.contact__form-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none !important;
}

@keyframes contactFade {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}

/*========== Light theme overrides: Contact ==========*/
.light-theme .contact__card {
  box-shadow: 0 2px 16px hsla(var(--second-hue), 48%, 8%, 0.1);
}

.light-theme .contact__form-div {
  box-shadow: 0 2px 16px hsla(var(--second-hue), 48%, 8%, 0.1);
}

.light-theme .contact__form-tag {
  background-color: var(--body-color);
}

/*=============== CONTACT BREAKPOINTS ===============*/
@media screen and (min-width: 630px) {
  .contact__container {
    display: grid;
    grid-template-columns: 220px 340px;
    column-gap: 2rem;
    justify-content: center;
  }

  .contact__info {
    grid-template-columns: 200px;
    gap: 1rem;
  }

  .contact__form {
    width: 340px;
  }
}

@media screen and (min-width: 992px) {
  .contact__info {
    grid-template-columns: 430px;
    gap: 1rem;
  }

  .contact__form {
    width: 430px;
  }

  .contact__form-area {
    height: 18rem;
  }

  .contact__container {
    grid-template-columns: repeat(2, 430px);
    column-gap: 6rem;
  }

  .contact__form-button {
    width: max-content;
  }
}
`;

const contactDetails = [
  {
    iconClass: "bx bx-mail-send",
    label: "Email",
    value: "ambarubale@gmail.com",
    href: "mailto:ambarubale@gmail.com?subject=New%20Message%20from%20Portfolio",
  },
  {
    iconClass: "bx bxl-whatsapp",
    label: "WhatsApp",
    value: "+91 9579377966",
    href: "https://wa.me/919579377966?text=Hi%20Ambar%20Ubale,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!",
  },
  {
    iconClass: "bx bxl-linkedin",
    label: "LinkedIn",
    value: "Ambar Ubale",
    href: "https://linkedin.com/in/ambar-ubale",
  },
];

const INITIAL = {
  name: "",
  email: "",
  subject: "Portfolio Message",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm(INITIAL);
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: contactStyles }} />
      <section className="contact section" id="contact">
        <span className="section__subtitle">Get in touch</span>
        <h3 className="section__title">Contact Me</h3>

        <div className="contact__container container grid">
          {/* Contact info cards */}
          <div className="contact__content">
            <h3 className="contact__title contact__title-info">Talk to me</h3>

            <div className="contact__info">
              {contactDetails.map((item, idx) => (
                <div className="contact__card" key={idx}>
                  <i className={`${item.iconClass} contact__card-icon`}></i>
                  <h3 className="contact__card-title">{item.label}</h3>
                  <span className="contact__card-data">{item.value}</span>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact__button"
                  >
                    Write Me{" "}
                    <i className="bx bx-right-arrow contact__button-icon"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="contact__content">
            <h3 className="contact__title contact__title-form">
              Write Me your Message
            </h3>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="contact__form-input"
                  required
                  disabled={status === "loading"}
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag">Mail</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="contact__form-input"
                  required
                  disabled={status === "loading"}
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  cols="30"
                  rows="10"
                  placeholder="Write your Message"
                  className="contact__form-input"
                  required
                  disabled={status === "loading"}
                ></textarea>
              </div>

              {status === "success" && (
                <div className="contact__status-message contact__status-success">
                  <i className="bx bx-check-circle"></i> Message sent! I&apos;ll
                  get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="contact__status-message contact__status-error">
                  <i className="bx bx-error-circle"></i> {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="contact__form-button"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <i className="bx bx-loader-alt contact__btn-spinner"></i>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="bx bx-send contact__btn-icon"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
