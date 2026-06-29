import { FaArrowRight } from "react-icons/fa";

function CourseCTA() {

  return (

    <section className="course-cta">

      <div className="cta-glow"></div>

      <div className="cta-content">

        <span>
          YOUR FUTURE STARTS HERE
        </span>

        <h2>

          Become Job Ready with
          <br />
          Core Edge Academy

        </h2>

        <p>

          Learn from industry experts,
          build real-world projects,
          earn certification,
          and get placement assistance.

        </p>

        <div className="cta-buttons">

          <button className="btn-primary">

            Enroll Now

            <FaArrowRight />

          </button>

          <button className="btn-secondary">

            Download Brochure

          </button>

        </div>

      </div>

    </section>

  );

}

export default CourseCTA;