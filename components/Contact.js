"use client";

import React, { useState } from "react";

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
    iconClass: "bx bxl-linkedin", // Twitter च्या जागी LinkedIn आयकॉन क्लास
    label: "LinkedIn",
    value: "Ambar Ubale",
    href: "https://linkedin.com/in/ambar-ubale", // तुमची LinkedIn प्रोफाईल लिंक इथे रिप्लेस करू शकता
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

            {/* Success Banner */}
            {status === "success" && (
              <div className="contact__status-message contact__status-success">
                <i className="bx bx-check-circle"></i> Message sent! I'll get
                back to you soon.
              </div>
            )}

            {/* Error Banner */}
            {status === "error" && (
              <div className="contact__status-message contact__status-error">
                <i className="bx bx-error-circle"></i> {errorMsg}
              </div>
            )}

            {/* Premium Slate-900 / Blue Hover style Button */}
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
  );
}
