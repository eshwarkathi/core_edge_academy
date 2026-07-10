import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import { saveVisitorProfile } from "../utils/visitorProfile";
import Footer from "../components/Footer";
import "../styles/pages/enroll.css";

const courses = [
  "Artificial Intelligence",
  "Data Analytics",
  " Software Testing",
  "Full Stack Development",
  "DevOps",
  "Scrum Master",
  "Flutter Development",
  "Business Analytics",
  "Tableau with AI",
  "Cyber Security",
  "Frontend Development",
];

const contactInfo = [
  {
    icon: "📞",
    title: "Call Us",
    value: "+91 8885492139",
    sub: "Mon - Sat : 9:00 AM - 7:00 PM",
  },
  {
    icon: "✉️",
    title: "Email",
    value: "coreedgeacademy@gmail.com",
    sub: "Quick response within 24 hours",
  },
  {
    icon: "📍",
    title: "Address",
    value: "Aditya Enclave, Everest Block,Ameerpet, Hyderabad",
    sub: "Telangana, India",
  },
];

export default function Enroll() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const courseFromURL = searchParams.get("course");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: courseFromURL || "",
    mode: "",
    description: "",
  });
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (courseFromURL) {
      setFormData((prev) => ({
        ...prev,
        course: courseFromURL,
      }));
    }
  }, [courseFromURL]);

  const goToHomeSection = (sectionId) => {
    navigate("/");

    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const payload = new URLSearchParams();

  payload.append("formType", "Enroll Now");
  payload.append("fullName", formData.fullName);
  payload.append("name", formData.fullName);
  payload.append("phone", formData.phone);
  payload.append("email", formData.email);
  payload.append("emailId", formData.email);
  payload.append("course", formData.course);
  payload.append("mode", formData.mode);
  payload.append("description", formData.description);

  try {
    saveVisitorProfile(formData.fullName, formData.email);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    await fetch(
      "https://script.google.com/macros/s/AKfycbwxFu-Fl8vas0E4wzBA6uzl5D3MXju55_cpmMWAF9i0Km5ROYRZatUjRJBJPil1GfcG/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload,
        signal: controller.signal,
      }
    ).catch(() => {});

    clearTimeout(timeoutId);

    setSuccessMessage("🎉 Thank you! Our Career Team will contact you soon.");
    setLoading(false);

    setTimeout(() => {
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        course: courseFromURL || "",
        mode: "",
        description: "",
      });
      setSuccessMessage("");
    }, 2000);

  } catch (err) {
    console.error(err);
    setLoading(false);
    alert("Unable to submit the form.");
  }
};

  return (
    <>
      <Header />

      <div className="enroll-page">


        {/* ================= ENROLL SECTION ================= */}

        <section className="enroll-wrapper container">

          {/* LEFT CONTENT */}

          <div className="left-box premium-card">

            <span className="small-title">
              GET STARTED
            </span>

            <h2>

              Launch Your Career

              <span> With Confidence</span>

            </h2>

            <p>

              Learn directly from industry experts,
              work on real-time projects,
              build a professional resume,
              and receive complete placement assistance.

            </p>

            <div
              className="left-features"
              onClick={(e) => {
                const title = e.target
                  .closest(".feature")
                  ?.querySelector("h4")
                  ?.textContent.trim();

                if (title === "Placement Assistance") {
                  goToHomeSection("successstories");
                }

                if (title === "24/7 Student Support") {
                  goToHomeSection("contact");
                }
              }}
            >

  
  <div className="feature">
    <div className="feature-icon">💼</div>
    <div>
      <h4>Placement Assistance</h4>
      <p>100% interview support & guidance.</p>
    </div>
  </div>

  <div className="feature">
    <div className="feature-icon">📜</div>
    <div>
      <h4>Certified Courses</h4>
      <p>Industry-recognized certifications.</p>
    </div>
  </div>

  <div className="feature">
    <div className="feature-icon">🎧</div>
    <div>
      <h4>24/7 Student Support</h4>
      <p>Dedicated support team available.</p>
    </div>
  </div>

</div>

<div
  className="call-card"
  onClick={() => setShowContactPopup(true)}
>
  <span>📞</span>

  <div>
    <small>Have any questions?</small>
    <h4>Call us at +91 8885492139</h4>
  </div>
</div>

          </div>

          {/* RIGHT FORM */}

           <div className="form-box premium-card">

            <h2>

              Book Your

              <span> Free Career Consultation</span>

            </h2>

            <p>

              Fill in your details and our career mentor
              will contact you shortly.

            </p>

            <form onSubmit={handleSubmit}>
                              <div className="form-grid">

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                >
                <option value="">
                Select Training Mode
                </option>

                <option>Online</option>
                <option>Offline</option>
                <option>Hybrid</option>
                </select>

                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Course
                  </option>

                  {courses.map((course) => (

                    <option
                      key={course}
                      value={course}
                    >
                      {course}
                    </option>

                  ))}

                </select>

                <textarea
                  rows="6"
                  name="description"
                  placeholder="Tell us about your education, experience or career goals..."
                  value={formData.description}
                  onChange={handleChange}
                />

              </div>

              <button
                className="submit-btn"
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Enroll Now →"}
              </button>

              {successMessage && (
                <p className="success-message" style={{ color: "#22c55e", textAlign: "center", marginTop: "12px" }}>
                  {successMessage}
                </p>
              )}

            </form>

          </div>

        </section>

        {/* ================= CONTACT + MAP ================= */}

        <section className="contact-map-section">

           <div className="contact-details premium-card">

                <div className="contact-heading">

                    <p className="hero-tag">
                       ~/contact
                    </p>

                    <h2>
                      Get In
                      <span> Touch</span>
                    </h2>

                    <p>
                    Have questions regarding courses,
                    placements or batches?

                    Our team is ready to guide you.
                    </p>

                </div>

                <div className="contact-cards">

                {contactInfo.map((item) => (

                <div
                    className="contact-card"
                   key={item.title}
                >

                <div className="icon">
                     {item.icon}
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <h5>{item.value}</h5>
                   <p>{item.sub}</p>
                </div>

            </div>
        

            ))}

        </div>
    

    </div>

    <div className="map-box premium-card">
      <iframe
        title="Core Edge Academy Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.489221823675!2d78.44273257516608!3d17.43628338345921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ce78998625%3A0x416e342171b4c4!2sCORE%20EDGE%20ACADEMY!5e0!3m2!1sen!2sin!4v1782730411386!5m2!1sen!2sin" 
        height="100%"
        style={{
        border: 0,
        borderRadius: "18px",
        }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

</section>

        {/* ================= CTA ================= */}

        <section className="bottom-cta">

          <div className="cta-content">

            <h2>

              Ready to Build Your

              <span> Dream Career?</span>

            </h2>

            <p>

              Join thousands of students who transformed their careers
              with Core Edge Academy's industry-oriented training.

            </p>

            <button
              className="cta-btn"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              Enroll Today
            </button>

          </div>

        </section>

      </div>
      {showContactPopup && (
  <div
    className="contact-popup-overlay"
    onClick={() => setShowContactPopup(false)}
  >
    <div
      className="contact-popup"
      onClick={(e) => e.stopPropagation()}
    >
      <h3>Need Help?</h3>

      <p>
        Choose how you'd like to contact our Career Team.
      </p>

      <a
        href="tel:+918885492139"
        className="contact-btn call-btn"
      >
        📞 Call Now
      </a>

      <a
        href="https://wa.me/918885492139"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn whatsapp-btn"
      >
        💬 WhatsApp
      </a>

      <button
        className="close-contact-popup"
        onClick={() => setShowContactPopup(false)}
      >
        Cancel
      </button>
    </div>
  </div>
)}

      <Footer />

    </>
  );
}
