import { color } from "framer-motion";
import {
  FaLaptopCode,
  FaUserTie,
  FaBriefcase,
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";

function CourseOverview({ overview }) {
  return (
    <section className="overview-section">

      <div className="overview-grid">

        {/* Left Card */}

        <div className="overview-card">

          <h2>Course Overview</h2>

          <p>
            {overview}
          </p>

          <ul>

            <li>
              <FaCheckCircle />
              Industry Relevant Curriculum
            </li>

            <li>
              <FaCheckCircle />
              Live Projects & Assignments
            </li>

            <li>
              <FaCheckCircle />
              Certification on Completion
            </li>

            <li>
              <FaCheckCircle />
              100% Placement Assistance
            </li>

          </ul>

        </div>

        {/* Right Card */}

        <div className="overview-card">

          <h2>Why Choose This Course?</h2>

          <div className="feature-grid">

            <div className="feature-card">

              <FaLaptopCode />

              <h3>Live Projects</h3>

              <p>
                Build real-world industry projects.
              </p>

            </div>

            <div className="feature-card">

              <FaUserTie />

              <h3>Expert Trainers</h3>

              <p>
                Learn from experienced professionals.
              </p>

            </div>

            <div className="feature-card">

              <FaBriefcase />

              <h3>Placement Support</h3>

              <p>
                Resume, mock interviews and hiring assistance.
              </p>

            </div>

            <div className="feature-card">

              <FaAward />

              <h3>Certification</h3>

              <p>
                Industry recognized certification.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CourseOverview;