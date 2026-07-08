import {
  FaStar,
  FaUsers,
  FaClock,
  FaLaptop,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

function CourseHero({
  image,
  title,
  subtitle,
  rating,
  students,
  duration,
  mode,
  brochure,
}) {
  return (
    <section className="course-hero">

      {/* Background */}

      <div className="hero-bg"></div>

      <div className="hero-grid"></div>

      <div className="hero-glow hero-glow-1"></div>

      <div className="hero-glow hero-glow-2"></div>

      {/* Content */}

      <div className="hero-container">

        {/* LEFT */}

        <div className="hero-left">

          <span className="hero-badge">
            🔥 Industry Ready Program
          </span>

          <h1>{title}</h1>

          <h2>{subtitle}</h2>

          <p>
            Learn directly from industry experts, work on live projects,
            master real-world tools, and become placement-ready with
            interview preparation and career guidance.
          </p>

          {/* Stats */}

          <div className="stats-strip">

            <div className="stat">

              <FaStar />

              <div>

                <strong>{rating}</strong>

                <span>Course Rating</span>

              </div>

            </div>

            <div className="stat">

              <FaUsers />

              <div>

                <strong>{students}+</strong>

                <span>Students Trained</span>

              </div>

            </div>

            <div className="stat">

              <FaClock />

              <div>

                <strong>{duration}</strong>

                <span>Duration</span>

              </div>

            </div>

            <div className="stat">

              <FaLaptop />

              <div>

                <strong>{mode}</strong>

                <span>Learning Mode</span>

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="hero-buttons">

            <button className="hero-primary">

              Enroll Now

              <FaArrowRight />

            </button>
            <a
              href={brochure}
              download={`${title}-Brochure`}
              className="hero-secondary"
              >
              <FaDownload />
               Download Brochure
            </a>

          </div>

          {/* Companies */}

          
        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <div className="course-card">

            

            <img
              src={image}
              alt={title}
              className="course-image"
            />

            <h3>{title}</h3>

            <p>Live Projects • Placement Assistance</p>

            <div className="course-card-footer">

              <span>★★★★★</span>

              <span>{students}+ Learners</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CourseHero;