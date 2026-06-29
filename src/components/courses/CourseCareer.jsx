import {
  FaLaptopCode,
  FaServer,
  FaCloud,
  FaRobot,
  FaChartBar,
  FaShieldAlt,
} from "react-icons/fa";

const icons = {
  "Full Stack Developer": <FaLaptopCode />,
  "Frontend Developer": <FaLaptopCode />,
  "Backend Developer": <FaServer />,
  "DevOps Engineer": <FaCloud />,
  "AI Engineer": <FaRobot />,
  "Data Analyst": <FaChartBar />,
  "Cyber Security Analyst": <FaShieldAlt />,
};

function CourseCareer({ careers = [] }) {
  return (
    <section className="career-section">

      <div className="section-title">

        <span>Career Path</span>

        <h2>Career Opportunities</h2>

      </div>

      <div className="career-grid">

        {careers.map((career) => (

          <div className="career-card" key={career}>

            <div className="career-icon">

              {icons[career] || <FaLaptopCode />}

            </div>

            <h3>{career}</h3>

            <p>
              Industry Ready Role
            </p>

            

          </div>

        ))}

      </div>

    </section>
  );
}

export default CourseCareer;