import logoMark from "../assets/logo-mark.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="foot">

      {/* ==========================
              TOP
      ========================== */}

      <div className="foot-top">

        <a className="brand" href="/">

          <img
            src={logoMark}
            alt="Core Edge Academy"
            className="brand-mark"
          />

          <span className="brand-name">
            Core Edge

            <span className="brand-sub">
              Academy
            </span>

          </span>

        </a>

        <nav className="foot-links">

          <a href="/#courses">Courses</a>

          <a href="/#audience">
            Who It's For
          </a>

          <a href="/#why">
            Why Us
          </a>

          <a href="/#faq">
            FAQ
          </a>

          <a href="/#contact">
            Contact
          </a>

        </nav>

      </div>

      {/* ==========================
          SOCIAL MEDIA
      ========================== */}

      <div className="footer-social">

        <a
          href="https://www.facebook.com/share/1EkZv7xPQp/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/coreedge_accademy?igsh=YXFmMmgzNzVmdmJw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://linkedin.com/in/core-edge-academy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://youtube.com/@coreedgeacademy?si=_OysbXJ89YSH1n-I"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>

        <a
          href="https://wa.me/918885492139"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

      </div>

      {/* ==========================
          CONTACT
      ========================== */}

      <div className="foot-contact">

        <a
          href="https://maps.google.com/?q=Aditya+Enclave+Ameerpet+Hyderabad+500038"
          target="_blank"
          rel="noreferrer"
        >

          <span className="foot-k">
            Address
          </span>

          1st Everest, Block C
          <br />

          Aditya Enclave
          <br />

          Ameerpet
          <br />

          Hyderabad - 500038

        </a>

        <a href="tel:+918885492139">

          <span className="foot-k">
            Phone
          </span>

          +91 88854 92139

        </a>

        <a href="mailto:coreedgeacademy@gmail.com">

          <span className="foot-k">
            Email
          </span>

          coreedgeacademy@gmail.com

        </a>

      </div>

      {/* ==========================
          BOTTOM
      ========================== */}

      <div className="foot-bottom">

        <span>

          © {year} Core Edge Academy

        </span>

        <span className="foot-tag">

          Learn • Build • Succeed

        </span>

      </div>

    </footer>
  );
}

export default Footer;