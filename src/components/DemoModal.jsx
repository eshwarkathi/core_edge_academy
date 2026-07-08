import { useState } from "react";
import "../styles/DemoModal.css";

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

export default function DemoModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  const formDataToSend = new FormData();

  formDataToSend.append("formType", "Book Free Demo");
  formDataToSend.append("fullName", formData.fullName);
  formDataToSend.append("phone", formData.phone);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("course", formData.course);
  formDataToSend.append("mode", "");
  formDataToSend.append("description", "");

  try {
    await fetch(
  "https://script.google.com/macros/s/AKfycbxQXswSmYMupP6P4V4luN6l_Uxz1si-QI1VbGdWtwkn12nRhWUkKQWMruUrUdzG5XZZ/exec",
  {
    method: "POST",
    body: formDataToSend,
  }
);

    alert("Thank you! Our Career Team will contact you shortly.");

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      course: "",
    });

    onClose();

  } catch (err) {
    console.error(err);
    alert("Unable to submit form.");
  }
};

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>Book Free Demo</h2>

        <p>
          Fill in your details and our Career Team will contact you shortly.
        </p>

        <form onSubmit={handleSubmit}>
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
            required
          >
            <option value="">Select Course</option>

            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>

          <button type="submit" className="submit-demo">
            Book Free Demo
          </button>
        </form>
      </div>
    </div>
  );
}