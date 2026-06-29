import {
  FaFileAlt,
  FaUserTie,
  FaHandshake,
  FaBriefcase,
} from "react-icons/fa";

const placementSteps = [
  {
    icon: <FaFileAlt />,
    title: "Resume Building",
    desc: "Create an ATS-friendly resume that stands out.",
  },
  {
    icon: <FaUserTie />,
    title: "Mock Interviews",
    desc: "Practice technical and HR interviews with mentors.",
  },
  {
    icon: <FaHandshake />,
    title: "Placement Support",
    desc: "Dedicated support until you secure your job.",
  },
  {
    icon: <FaBriefcase />,
    title: "Hiring Partners",
    desc: "Interview opportunities with our hiring network.",
  },
];

function CoursePlacement() {
  return (
    <section className="placement-section">

      <div className="section-title">
        <span>Placement Support</span>
        <h2>Everything You Need to Get Hired</h2>
      </div>

      <div className="placement-grid">

        {placementSteps.map((step, index) => (
          <div className="placement-card" key={index}>

            <div className="placement-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default CoursePlacement;