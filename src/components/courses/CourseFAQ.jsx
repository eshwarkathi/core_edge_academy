import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function CourseFAQ({ faqs = [] }) {
  const [active, setActive] = useState(0);

  return (
    <section className="faq-section">

      <div className="section-title">
        <span>FAQs</span>
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="faq-wrapper">

        {faqs.map((faq, index) => {

          const isOpen = active === index;

          return (

            <div
              className={`faq-card ${isOpen ? "active" : ""}`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() =>
                  setActive(isOpen ? -1 : index)
                }
              >

                <span>{faq.question}</span>

                {isOpen ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}

              </button>

              {isOpen && (

                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>

              )}

            </div>

          );

        })}

      </div>

    </section>
  );
}

export default CourseFAQ;