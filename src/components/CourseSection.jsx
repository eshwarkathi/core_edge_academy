import { Link } from "react-router-dom";
import "../styles/home-course-section.css";
const COURSES = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    subtitle: "Generative AI",
    icon: "🤖",
  },
  {
    id: "qa",
    title: "Automation Testing",
    subtitle: "Selenium • CI/CD",
    icon: "🧪",
  },
  {
    id: "devops",
    title: "DevOps",
    subtitle: "Docker • Kubernetes • AWS",
    icon: "☁️",
  },
  {
    id: "scrum",
    title: "Scrum Master",
    subtitle: "Agile • Jira",
    icon: "📋",
  },
  {
    id: "data",
    title: "Data Analytics",
    subtitle: "SQL • Power BI",
    icon: "📊",
  },
  {
    id: "ba",
    title: "Business Analyst",
    subtitle: "Requirements Gathering",
    icon: "💼",
  },
  {
    id: "fs",
    title: "Full Stack Development",
    subtitle: "React • Node.js",
    icon: "💻",
  },
  {
    id: "flutter",
    title: "Flutter Development",
    subtitle: "Android • iOS",
    icon: "📱",
  },
  {
    id: "sec",
    title: "Cyber Security",
    subtitle: "Ethical Hacking",
    icon: "🔐",
  },
  {
    id: "tableau",
    title: "Tableau with AI",
    subtitle: "Business Intelligence",
    icon: "📈",
  },
];

function CourseSection() {
  return (
    <section className="home-courses" id="courses">

      <div className="home-course-head">

        <p className="eyebrow">~/courses</p>

        <h2>Our Courses</h2>

        <p className="home-course-sub">
          Choose your career path and become industry ready.
        </p>

      </div>

      <div className="home-course-grid">

        {COURSES.map((course) => (

          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="home-course-card"
          >

            <span className="home-course-icon">
              {course.icon}
            </span>

            <h3>{course.title}</h3>

            <p className="home-course-tag">
              {course.subtitle}
            </p>

            <span className="home-course-link">
              View Details →
            </span>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default CourseSection;