import CountUp from "react-countup";
import { FaUsers, FaBriefcase, FaLaptopCode, FaAward } from "react-icons/fa";

const stats = [
  {
    number: 98,
    suffix: "%",
    title: "Placement Rate",
    icon: <FaAward />,
  },
  {
    number: 500,
    suffix: "+",
    title: "Students Trained",
    icon: <FaUsers />,
  },
  {
    number: 50,
    suffix: "+",
    title: "Hiring Partners",
    icon: <FaBriefcase />,
  },
  {
    number: 100,
    suffix: "+",
    title: "Live Projects",
    icon: <FaLaptopCode />,
  },
];

function CourseStats() {
  return (
    <section className="stats-section">

      <div className="section-title">

        <span>Achievements</span>

        <h2>Our Success in Numbers</h2>

      </div>

      <div className="stats-grid">

        {stats.map((item, index) => (

          <div className="stats-card" key={index}>

            <div className="stats-icon">
              {item.icon}
            </div>

            <h3>

              <CountUp
                end={item.number}
                duration={3}
              />

              {item.suffix}

            </h3>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default CourseStats;