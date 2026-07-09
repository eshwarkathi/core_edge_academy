import { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxQXswSmYMupP6P4V4luN6l_Uxz1si-QI1VbGdWtwkn12nRhWUkKQWMruUrUdzG5XZZ/exec";

const initialFormData = {
  fullName: "",
  phone: "",
  email: "",
  course: "",
  message: "",
};

const courses = [
  "Artificial Intelligence",
  "Data Analytics",
  "Software Testing",
  "Full Stack Development",
  "DevOps",
  "Scrum Master",
  "Flutter Development",
  "Business Analytics",
  "Tableau with AI",
  "Cyber Security",
  "Frontend Development",
];

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formDataToSend = new FormData();
    formDataToSend.append("formType", "Contact Us");
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("course", formData.course);
    formDataToSend.append("message", formData.message);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend,
      });

      setFormData(initialFormData);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="section home-contact-section" id="contact">
      <div className="home-contact-shell">
        <div className="home-contact-copy">
          <p className="eyebrow">~/contact</p>
          <h2>Contact Us</h2>
          <p>
            Share your details and our career advisor will contact you about
            courses, batches, fees, or placement guidance.
          </p>
        </div>

        <form className="home-contact-form" onSubmit={handleSubmit}>
          <div className="home-contact-fields">
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
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select Course</option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>

            <textarea
              rows="5"
              name="message"
              placeholder="Tell us what you want to know..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            className="home-contact-submit"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="home-contact-status success">
              Thank you. Our team will contact you soon.
            </p>
          )}

          {status === "error" && (
            <p className="home-contact-status error">
              Unable to submit the form. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
