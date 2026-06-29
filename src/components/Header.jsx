import "../styles/header.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    // If not on homepage, go to homepage first
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

        {/* Navigation */}

        <nav>

          <ul className="nav-links">

            <li>
              <button onClick={() => handleNavigation("home")}>
                Home
              </button>
            </li>

            <li>
              <button onClick={() => handleNavigation("courses")}>
                Courses
              </button>
            </li>

           

            <li>
              <button onClick={() => handleNavigation("Scuccessstories")}>
                Success Stories
              </button>
            </li>

            <li>
              <button onClick={() => handleNavigation("why")}>
                About
              </button>
            </li>

            <li>
              <button onClick={() => handleNavigation("contact")}>
                Contact
              </button>
            </li>

          </ul>

        </nav>

        {/* CTA */}

        <div className="header-btn">
          <button
            onClick={() => handleNavigation("contact")}
           >
            Enroll Now
          </button>
        </div>

        {/* Mobile */}

        <div className="mobile-menu">
          <HiOutlineMenuAlt3 />
        </div>

      </div>
    </header>
  );
}

export default Header;