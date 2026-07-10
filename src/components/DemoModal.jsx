import { useState } from "react";
import "../styles/DemoModal.css";
import { saveVisitorProfile } from "../utils/visitorProfile";

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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!open) return null;

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

  payload.append("formType", "Book Free Demo");
  payload.append("fullName", formData.fullName);
  payload.append("name", formData.fullName);
  payload.append("phone", formData.phone);
  payload.append("email", formData.email);
  payload.append("emailId", formData.email);
  payload.append("course", formData.course);
  payload.append("mode", "");
  payload.append("description", "");

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
    
    setSuccess(true);
    setLoading(false);

    setTimeout(() => {
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        course: "",
      });
      setSuccess(false);
      onClose();
    }, 1500);

  } catch (err) {
    console.error(err);
    setLoading(false);
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

          <button type="submit" className="submit-demo" disabled={loading}>
            {loading ? "Submitting..." : "Book Free Demo"}
          </button>

          {success && (
            <p style={{ color: "#22c55e", textAlign: "center", marginTop: "12px", fontSize: "14px" }}>
              ✓ Thank you! Check your email for confirmation.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}