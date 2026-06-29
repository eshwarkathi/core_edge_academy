import {
  FaClipboardCheck,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaUserTie,
  FaBriefcase,
} from "react-icons/fa";

const journey = [
  {
    icon: <FaClipboardCheck />,
    title: "Enroll",
    desc: "Choose your course and complete registration.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Training",
    desc: "Attend live interactive classes with mentors.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Projects",
    desc: "Build real-time industry-level applications.",
  },
  {
    icon: <FaUserTie />,
    title: "Mock Interviews",
    desc: "Practice technical & HR interviews.",
  },
  {
    icon: <FaBriefcase />,
    title: "Placement",
    desc: "Get interview opportunities with hiring partners.",
  },
];

function CourseJourney() {
  return (
    <section className="journey-section">

      <div className="section-title">

        <span>Learning Path</span>

        <h2>Your Learning Journey</h2>

      </div>

      <div className="journey-wrapper">

        {journey.map((step, index) => (

          <div className="journey-item" key={index}>

            <div className="journey-icon">
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

export default CourseJourney;