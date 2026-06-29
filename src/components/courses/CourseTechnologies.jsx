import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const TECH_ICONS = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb />,
  JavaScript: "🟨",
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  Python: <FaPython />,
  Java: <FaJava />,
  MySQL: <SiMysql />,
  Git: <FaGitAlt />,
  Docker: <FaDocker />,
  AWS: <FaAws />,
  Postman: <SiPostman />,
  "VS Code": <VscVscode />,
};

function CourseTechnologies({ technologies = [] }) {
  return (
    <section className="technologies-section">
      <div className="section-title">
        <span>Tech Stack</span>
        <h2>Technologies Covered</h2>
      </div>

      <div className="technology-grid">
        {technologies.map((tech, index) => (
          <div className="technology-card" key={index}>
            <div className="technology-icon">
              {TECH_ICONS[tech] || "💻"}
            </div>

            <h3>{tech}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseTechnologies;