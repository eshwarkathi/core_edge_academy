function Successstories() {

  const reviews = [
    {
      name: "Rohit Kumar",
      course: "Full Stack Development",
      company: "Infosys",
      review:
        "Core Edge Academy helped me become industry ready. The trainers, projects and mock interviews helped me crack my interview.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Sai Teja",
      course: "Artificial Intelligence",
      company: "TCS",
      review:
        "The AI course covered everything from Python to Generative AI. Placement support was excellent.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Priya Sharma",
      course: "Automation Testing",
      company: "Accenture",
      review:
        "Best institute for Selenium and Java. Live projects made interviews very easy.",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <section className="section" id="Scuccessstories">

      <div className="sec-head">
        <p className="eyebrow">~/testimonials</p>
        <h2>Student Success Stories</h2>
        <p className="sec-sub">
          Hear from our students who successfully started their careers.
        </p>
      </div>

      <div className="testimonial-grid">

        {reviews.map((item) => (

          <div className="testimonial-card" key={item.name}>

            <div className="student-avatar">

              {item.name.charAt(0)}

            </div>

            <h3>{item.name}</h3>

            <p className="course-name">
              {item.course}
            </p>

            <div className="rating">
              {item.rating}
            </div>

            <p className="review">
              "{item.review}"
            </p>

            <span className="placed-at">
              🚀 Placed at {item.company}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Successstories;