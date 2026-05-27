export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ambar</h1>

        <ul className="footer__list">
          <li className="footer__item">
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
          <li className="footer__item">
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li className="footer__item">
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li className="footer__item">
            <a href="#work" className="footer__link">
              Work
            </a>
          </li>
          <li className="footer__item">
            <a href="#experience" className="footer__link">
              Experience
            </a>
          </li>
          <li className="footer__item">
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <ul className="footer__social">
          <li className="footer__social-item">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <i className="bx bxl-facebook footer__social-icon"></i>
            </a>
          </li>
          <li className="footer__social-item">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <i className="bx bxl-twitter footer__social-icon"></i>
            </a>
          </li>
          <li className="footer__social-item">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <i className="bx bxl-linkedin footer__social-icon"></i>
            </a>
          </li>
          <li className="footer__social-item">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <i className="bx bxl-instagram footer__social-icon"></i>
            </a>
          </li>
        </ul>

        <span className="footer__copy">
          &#169; 2024 Ambar. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
