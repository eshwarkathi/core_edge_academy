import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (sectionId) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);
    } else {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <>
      <header className="header">
        <div className="container header-wrapper">

          {/* Logo */}

          <Link to="/" className="logo">
            <img
              src="/logo.png"
              alt="Core Edge Academy"
            />

            <div className="logo-text">
              <h2>Core Edge</h2>
              <span>Academy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <nav>
            <ul className="nav-links">

              <li>
                <button onClick={() => handleNavigation("home")}>
                  Home
                </button>
              </li>

              <li>
                <Link to="/about">
                  About us
                </Link>
              </li>

              <li>
                <button onClick={() => handleNavigation("courses")}>
                  Courses
                </button>
              </li>

              <li>
                <button onClick={() => handleNavigation("successstories")}>
                  Success Stories
                </button>
              </li>

              <li>
                <button onClick={() => handleNavigation("why")}>
                  Why Us
                </button>
              </li>

              <li>
                <button onClick={() => handleNavigation("contact")}>
                  Contact Us
                </button>
              </li>

            </ul>
          </nav>

          {/* Desktop Button */}

          <div className="header-btn">
            <Link to="/enroll">
              <button>Enroll Now</button>
            </Link>
          </div>

          {/* Mobile Hamburger */}

          <div
            className="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <HiOutlineMenuAlt3 />
          </div>

        </div>
      </header>

      {/* Mobile Sidebar */}

      <div className={`mobile-nav ${menuOpen ? "active" : ""}`}>

        <div className="mobile-close">
          <IoClose onClick={() => setMenuOpen(false)} />
        </div>

        <button onClick={() => handleNavigation("home")}>
          Home
        </button>

        <Link
          to="/about"
          onClick={() => setMenuOpen(false)}
          className="mobile-link"
        >
          About Us
        </Link>

        <button onClick={() => handleNavigation("courses")}>
          Courses
        </button>

        <button onClick={() => handleNavigation("successstories")}>
          Success Stories
        </button>

        <button onClick={() => handleNavigation("why")}>
          Why Us
        </button>

        <button onClick={() => handleNavigation("contact")}>
          Contact Us
        </button>

        <Link
          to="/enroll"
          onClick={() => setMenuOpen(false)}
        >
          <button className="mobile-enroll">
            Enroll Now
          </button>
        </Link>

      </div>

      {/* Background Overlay */}

      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Header;
