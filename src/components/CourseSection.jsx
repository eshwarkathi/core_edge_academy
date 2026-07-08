import { Link } from "react-router-dom";
import "../styles/home/course-section.css";

import { Swiper, SwiperSlide } from "swiper/react";


import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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

      <Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={24}
  slidesPerView={4}
  grabCursor={true}
  loop={true}
  centeredSlides={false}
  pagination={{
    clickable: true,
  }}
  autoplay={{
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  breakpoints={{
    320: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 1.8,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 22,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  }}
  className="courseSwiper"
>

        {COURSES.map((course) => (

          <SwiperSlide key={course.id}>

            <Link
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

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}

export default CourseSection;
