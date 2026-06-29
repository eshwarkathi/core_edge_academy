import logoMark from "../assets/logo-mark.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="foot">

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
          <a href="/#audience">Who It's For</a>
          <a href="/#why">Why Us</a>
          <a href="/#faq">FAQ</a>
          <a href="/#contact">Contact</a>

        </nav>

      </div>

      <div className="foot-contact">

        <a
          href="https://maps.google.com/?q=Aditya+Enclave+Ameerpet+Hyderabad+500038"
          target="_blank"
          rel="noreferrer"
        >
          <span className="foot-k">Address</span>

          1st Everest, Block C,
          <br />

          Aditya Enclave,
          <br />

          Ameerpet,
          <br />

          Hyderabad - 500038

        </a>

        <a href="tel:+918885492139">

          <span className="foot-k">Phone</span>

          +91 88854 92139

        </a>

        <a href="mailto:coreedgeacademy@gmail.com">

          <span className="foot-k">Email</span>

          coreedgeacademy@gmail.com

        </a>

      </div>

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