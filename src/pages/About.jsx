import React, { useState } from "react";
import DemoModal from "../components/DemoModal";

import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaLaptopCode,
  FaUserGraduate,
  FaBriefcase,
  FaUsers,
  FaChalkboardTeacher,
  FaAward,
  FaPlayCircle,
  FaCheckCircle,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages/About.css";
import { BiFontSize } from "react-icons/bi";


const About = () => {
const [open, setOpen] = useState(false);
const navigate = useNavigate();
  

  const courses = [
  {
    title: "Artificial Intelligence",
    path: "/courses/ai",
  },
  {
    title: "Data Analytics",
    path: "/courses/data",
  },
  {
    title: "Business Analyst",
    path: "/courses/ba",
  },
  {
    title: "Software Testing",
    path: "/courses/qa",
  },
  {
    title: "Full Stack Development",
    path: "/courses/fs",
  },
  {
    title: "Tableau with AI",
    path: "/courses/tableau",
  },
  {
    title: "DevOps",
    path: "/courses/devops",
  },
  {
    title: "Flutter Development",
    path: "/courses/flutter",
  },
  {
    title: "Cyber Security",
    path: "/courses/sec",
  },
  {
    title: "Scrum Master",
    path: "/courses/scrum",
  },
];
  
const faqs = [
   {
    q: "Do you provide placement assistance?",
    a: "Yes. We provide resume building, mock interviews, aptitude training, HR preparation, and placement assistance.",
  },
  {
    q: "Are classes online or offline?",
    a: "Both. You can attend classes online from anywhere or visit our Ameerpet campus.",
  },
  {
    q: "Will I get live projects?",
    a: "Yes. Every course includes real-time live projects to build your portfolio.",
  },
  {
    q: "Who can join Core Edge Academy?",
    a: "Freshers, graduates, working professionals, and career switchers can join.",
  },
  {
    q: "Do you provide certificates?",
    a: "Yes. Course completion certificates are provided after successful completion.",
  },
  {
    q: "How do I enroll?",
    a: "Call or WhatsApp us to know about upcoming batches, course fees, demo classes, and complete syllabus.",
  },
];

return (
<>
<Header />

<div className="about-page">
{/* ===========================
        HERO SECTION
=========================== */}

<section className="about-hero">

  <div className="about-container">

    <div className="about-hero-grid">

      {/* LEFT */}

      <div className="about-left">

        <span className="about-tag">

          BUILD SKILLS • BUILD FUTURE

        </span>

        <h1>

          Build Skills.

          <span> Build Future.</span>

        </h1>

        <p>
          Sinces 2025.<br></br> Core Edge Academy is one of Hyderabad's leading
          career-focused IT training institutes helping
          students and professionals become industry ready.

          Learn from experienced trainers, work on live
          projects, gain practical knowledge and receive
          complete placement assistance to launch your
          dream IT career.

        </p>

        <div className="about-buttons">

          <button
            className="about-btn-primary"
            onClick={() => {
            document.getElementById("courses")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            });
            }}
            >
            Explore Courses
            <FaArrowRight />
          </button>

          <button
            className="about-btn-secondary"
            onClick={() => setOpen(true)}
           >
            Book Free Demo
          </button>
        </div>

        <div className="about-hero-features">

          <div>

            <FaCheckCircle />

            <span>Industry Experts</span>

          </div>

          <div>

            <FaCheckCircle />

            <span>Live Projects</span>

          </div>

          <div>

            <FaCheckCircle />

            <span>Placement Assistance</span>

          </div>

          <div>

            <FaCheckCircle />

            <span>Career Guidance</span>

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="about-right">

        <div className="about-image-box">

          <img
            src="src/assets/CE_images/cep.jpeg"
            alt="Core Edge Academy"
          />


          

        </div>

      </div>

    </div>

  </div>

</section>

<section className="about-company">

  <div className="about-container">

    <div className="about-company-grid">

      <div className="about-company-image">

        <img
          src="src/assets/CE_images/CEpb.jpeg"
          alt="Core Edge Academy"
        />

    

      </div>

      <div className="about-company-content">

        <span className="about-small-title">

          ABOUT CORE EDGE ACADEMY

        </span>

        <h2>

          Learn Today.
          Succeed Tomorrow.

        </h2>

        <p>

          Core Edge Academy is dedicated to building
          skilled IT professionals through practical
          learning and industry-focused education.

        </p>

        <p>

          We believe every student deserves quality
          training, hands-on experience and the right
          career guidance to secure a successful future
          in the IT industry.

        </p>

        <div className="about-check-list">

          <div>

            <FaCheckCircle />

            <span>Industry Expert Trainers</span>

          </div>

          <div>

            <FaCheckCircle />

            <span>Job-Oriented Curriculum</span>

          </div>

          <div>

            <FaCheckCircle />

            <span>Live Project Training</span>

          </div>

          <div>

            <FaCheckCircle />

            <span>Placement Assistance</span>

          </div>

          <div>

            <FaCheckCircle />

            <span>Mock Interviews</span>

          </div>

          <div>

            <FaCheckCircle />

            <span>Career Guidance</span>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ===========================
      MISSION & VISION
=========================== */}

<section className="about-mission">

  <div className="about-container">

    <div className="about-title">

      <span>OUR MISSION</span>

      <h2>Practical Training. Better Careers.</h2>

      <p>

        We focus on building practical knowledge,
        real-world skills and career confidence
        that helps every student succeed in the
        IT industry.

      </p>

    </div>

    <div className="about-mission-grid">

      <div className="about-mission-card">

        <div className="about-card-icon">

          🎯

        </div>

        <h3>Our Mission</h3>

        <p>

          To provide industry-focused IT education
          through practical training, live projects,
          experienced mentors and placement support
          that prepares students for successful careers.

        </p>

      </div>

      <div className="about-mission-card">

        <div className="about-card-icon">

          🚀

        </div>

        <h3>Our Vision</h3>

        <p>

          To become one of India's most trusted
          career-oriented IT training institutes by
          delivering quality education, innovation
          and excellent placement results.

        </p>

      </div>

    </div>

  </div>

</section>
{/* ============================
      WHY CHOOSE US
=========================== */}

<section className="about-why">

  <div className="about-container">

    <div className="about-title">

      <span>WHY CHOOSE CORE EDGE ACADEMY</span>

      <h2>Learn Today. Succeed Tomorrow.</h2>

      <p>

        Everything you need to become industry-ready
        under one roof.

      </p>

    </div>

    <div className="about-why-grid">

      {[
        {
          icon: <FaChalkboardTeacher />,
          title: "Learn from Industry Experts",
          desc: "Gain knowledge directly from experienced IT professionals."
        },
        {
          icon: <FaAward />,
          title: "Job-Oriented Curriculum",
          desc: "Courses designed according to current industry requirements."
        },
        {
          icon: <FaLaptopCode />,
          title: "Hands-on Practical Training",
          desc: "Practice every concept through live projects and assignments."
        },
        {
          icon: <FaBriefcase />,
          title: "Placement Assistance",
          desc: "Resume preparation, mock interviews and placement support."
        },
        
        {
          icon: <FaUserGraduate />,
          title: "Career Guidance",
          desc: "Continuous mentorship from enrollment to placement."

        }

      ].map((item,index)=>(

        <div
          className="about-why-card"
          key={index}
        >

          <div className="about-why-icon">

            {item.icon}

          </div>

          <h3>{item.title}</h3>

          <p>{item.desc}</p>

        </div>

      ))}

    </div>

  </div>

</section>
<section className="about-stats">

  <div className="about-container">

    <div className="about-stats-grid">

      <div className="about-stat-card">

        <h2>400+</h2>

        <span>Students Trained</span>

      </div>

      <div className="about-stat-card">

        <h2>300+</h2>

        <span>Successful Placements</span>

      </div>

      <div className="about-stat-card">

        <h2>50+</h2>

        <span>Hiring Partners</span>

      </div>

      <div className="about-stat-card">

        <h2>100%</h2>

        <span>Career Support</span>

      </div>

    </div>

  </div>

</section>
{/* ============================
      LEARNING JOURNEY
=========================== */}
<section className="about-journey">

  <div className="about-container">

    <div className="about-title">

      <span>YOUR JOURNEY</span>

      <h2>

        Learn • Practice • Get Hired

      </h2>

    </div>

    <div className="about-timeline">

      <div className="about-step">

        <div className="about-step-number">01</div>

        <h3>Enroll</h3>

        <p>Choose your career path.</p>

      </div>

      <div className="about-step">

        <div className="about-step-number">02</div>

        <h3>Learn</h3>

        <p>Industry expert trainers.</p>

      </div>

      <div className="about-step">

        <div className="about-step-number">03</div>

        <h3>Practice</h3>

        <p>Assignments and real projects.</p>

      </div>

      <div className="about-step">

        <div className="about-step-number">04</div>

        <h3>Interview</h3>

        <p>Mock interview preparation.</p>

      </div>

      <div className="about-step">

        <div className="about-step-number">05</div>

        <h3>Get Hired</h3>

        <p>Placement assistance.</p>

      </div>

    </div>

  </div>

</section>
<section className="about-gallery">

  <div className="about-container">

    <div className="about-title">

      <span>OUR CAMPUS</span>

     <h2>Explore Core Edge Academy</h2>

      <p>

        Experience our professional learning
        environment and modern classrooms.

      </p>

    </div>

    <div className="about-gallery-grid">

    <img
src="src/assets/CE_images/CE_img_2.jpeg"
alt="Office"
/>

<img
src="src/assets/CE_images/CE_img_3.jpeg"
alt="Office"
/>

<img
src="src/assets/CE_images/CE_img_4.jpeg"
alt="Classroom"
/>

<img
src="src/assets/CE_images/CE_img_5.jpeg"
alt="Training Lab"
/>

</div>

</div>

</section>
      {/* ===========================
      INDUSTRY READY COURSES
=========================== */}

<section id="courses" className="about-courses">

  <div className="about-container">

    <div className="about-title">

      <span>OUR INDUSTRY READY COURSES</span>

      <h2>Choose Your Career Path</h2>

      <p>

        Learn the most in-demand technologies with
        practical training and placement support.

      </p>

    </div>

    <div className="about-course-grid">

  {courses.map((course, index) => (

    <Link
      key={index}
      to={course.path}
      className="about-course-card"
    >

      <FaLaptopCode />

      <h3>{course.title}</h3>

    </Link>

  ))}

</div>

  </div>

</section>

  
      {/* ===========================
            PRACTICAL TRAINING
      =========================== */}

<section className="about-placement">

  <div className="about-container">

    <div className="about-placement-grid">

      <div>

        <span>

          PRACTICAL TRAINING

        </span>

        <h2>

          Better Skills.
          Better Careers.

        </h2>

        <p>

          We don't just teach concepts.
          We help students gain practical
          experience through live projects,
          industry case studies and hands-on
          sessions.

        </p>

      </div>

      <div className="about-placement-box">

        <div>

          <FaCheckCircle />

          Practical Knowledge

        </div>

        <div>

          <FaCheckCircle />

          Live Projects

        </div>

        <div>

          <FaCheckCircle />

          Industry Ready Skills

        </div>

        <div>

          <FaCheckCircle />

          Better Career Opportunities

        </div>

        <div>

          <FaCheckCircle />

          Mock Interviews

        </div>

        <div>

          <FaCheckCircle />

          Placement Assistance

        </div>

      </div>

    </div>

  </div>

</section>

  
      {/* ===========================
            FAQ
      =========================== */}

      <section className="about-faq">

        <div className="about-container">

          <div className="about-title">

            <span>FAQ</span>

            <h2>Frequently Asked Questions</h2>

          </div>

         <div className="about-course-grid">
  {courses.map((course, index) => (
    <Link
      key={index}
      to={course.path}
      className="about-course-card"
    >
      <FaLaptopCode />
      <h3>{course.title}</h3>
    </Link>
  ))}
</div>

        </div>

      </section>
{/* ===========================
      CTA
=========================== */}

<section className="about-cta">

  <div className="about-container">

    <div className="about-cta-box">

      <span>

        ADMISSIONS OPEN 2026

      </span>

      <h2>

        Build Skills.
        Build Future.

      </h2>

      <p>

        Join Core Edge Academy and learn from
        experienced trainers, build real-world
        projects, prepare for interviews and
        launch your IT career with complete
        placement assistance.

      </p>

      <div className="about-buttons">

        <Link
          to="/enroll"
          className="about-btn-primary"
        >

          Enroll Now

          <FaArrowRight />

        </Link>

        <button
  className="about-btn-secondary"
  onClick={() => setOpen(true)}
>
  Book Free Demo
</button>
      </div>

    </div>

  </div>

</section>
        </div>
        <DemoModal
  open={open}
  onClose={() => setOpen(false)}
/>

    <Footer />
  </>
);
    



};

export default About;