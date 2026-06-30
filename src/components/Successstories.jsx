
function Scuccessstories() {
  const reviews = [
    {
      name: "Venkata Ramana",
      course: "Test Engineer",
      package: "5.2 LPA",
      review:
        "Learning through live projects made technical interviews much easier.",
    },
    {
      name: "Abhishek",
      course: "Test Engineer",
      package: "8 LPA",
      review:
        "Core Edge Academy provided excellent interview preparation and hands-on testing projects. The placement support helped me secure my dream job.",
    },
    {
      name: "Leela",
      course: "Full Stack Developer",
      package: "5.5 LPA",
      review:
        "The trainers explained every concept with real-time examples. Live projects improved my confidence during interviews.",
    },
    {
      name: "Satyaneelima",
      course: "Full Stack Developer",
      package: "4.8 LPA",
      review:
        "Excellent faculty and practical assignments. Every class helped me improve my coding skills.",
    },
    {
      name: "Anil Kumar",
      course: "Test Engineer",
      package: "7.1 LPA",
      review:
        "Mock interviews and resume preparation played a huge role in getting my placement.",
    },
    {
      name: "Anusha",
      course: "Full Stack Developer",
      package: "9 LPA",
      review:
        "The Full Stack course was industry-oriented and helped me crack multiple interviews.",
    },
    {
      name: "Prashanth",
      course: ".NET Developer",
      package: "8 LPA",
      review:
        "The trainers were highly experienced and guided me throughout the placement journey.",
    },
    {
      name: "Avanika",
      course: "Full Stack Developer",
      package: "5.2 LPA",
      review:
        "The placement team was very supportive. I highly recommend Core Edge Academy.",
    },
    {
      name: "Anand",
      course: "Scrum Master",
      package: "₹14 LPA",
      review:
        "The Scrum Master program covered Agile practices in depth with real-world case studies.",
    },
    {
      name: "Vinay",
      course: "Scrum Master",
      package: "12 LPA",
      review:
        "Every session was interactive and helped me confidently attend interviews.",
    },
    {
      name: "Areef",
      course: "Network Test Engineer",
      package: "12 LPA",
      review:
        "Excellent networking concepts, practical labs and interview guidance.",
    },
    {
      name: "Abhishek Naveen Raj",
      course: "Scrum Master",
      package: "10.8 LPA",
      review:
        "The certification training and placement support exceeded my expectations.",
    },
    {
      name: "Aeshitha",
      course: "Scrum Master",
      package: "15 LPA",
      review:
        "Highly professional trainers with excellent placement assistance.",
    },
    {
      name: "Rohan",
      course: "Scrum Master",
      package: "12 LPA",
      review:
        "Every topic was explained with practical examples that helped me during interviews.",
    },
    {
      name: "Vishnu",
      course: "Scrum Master",
      package: "21 LPA",
      review:
        "The best training institute for Agile and Scrum with excellent placement support.",
    },
    {
      name: "Tharun",
      course: "Scrum Master",
      package: "11 LPA",
      review:
        "A well-structured course with excellent mentors and placement guidance.",
    },
    
  ];

  return (
    <section className="section" id="Successstories">

      <div className="sec-head">

        <p className="eyebrow">~/placements</p>

        <h2>Our Success Stories</h2>

        <p className="sec-sub">
          Hundreds of students have transformed their careers with Core Edge Academy.
        </p>

      </div>

      <div className="testimonial-slider">

        <div className="testimonial-track">

          {[...reviews, ...reviews].map((item, index) => (

            <div className="testimonial-card" key={index}>

              <div className="student-avatar">

                {item.name.charAt(0)}

              </div>

              <h3>{item.name}</h3>

              <p className="course-name">

                {item.course}

              </p>

              <div className="rating">

                ⭐⭐⭐⭐⭐

              </div>

              <p className="review">

                "{item.review}"

              </p>

              <div className="package">

                💰 {item.package}

              </div>

              <span className="placed-at">

                ✅ Successfully Placed

              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Scuccessstories;