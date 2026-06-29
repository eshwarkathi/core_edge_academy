import {
  FaRocket,
  FaProjectDiagram,
  FaCertificate,
  FaBriefcase,
  FaUserGraduate,
  FaInfinity,
} from "react-icons/fa";

const ICONS = {
  "Industry Projects": <FaProjectDiagram />,
  "Live Projects": <FaRocket />,
  "Certification": <FaCertificate />,
  "Placement Assistance": <FaBriefcase />,
  "Interview Preparation": <FaUserGraduate />,
};

function CourseHighlights({ highlights = [] }) {
  return (
    <section className="highlights-section">

      <div className="section-title">
        <span>Course Features</span>
        <h2>Why Students Love This Course</h2>
      </div>

      <div className="highlights-grid">

        {highlights.map((item, index) => (

          <div className="highlight-card" key={index}>

            <div className="highlight-icon">
              {ICONS[item] || <FaInfinity />}
            </div>

            <h3>{item}</h3>

            <p>
              Gain practical knowledge through expert guidance,
              hands-on training and real-world experience.
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default CourseHighlights;