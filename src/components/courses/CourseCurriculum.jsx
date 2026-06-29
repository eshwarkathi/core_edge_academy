import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function CourseCurriculum({ curriculum = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="curriculum-section">

      <div className="section-title">
        <span>Course Modules</span>
        <h2>Curriculum</h2>
      </div>

      <div className="curriculum-wrapper">

        {curriculum.map((module, index) => {

          const isOpen = openIndex === index;

          return (

            <div
              className={`accordion ${isOpen ? "active" : ""}`}
              key={index}
            >

              <button
                className="accordion-header"
                onClick={() =>
                  setOpenIndex(isOpen ? -1 : index)
                }
              >

                <div>

                  <span className="module-no">
                    Module {index + 1}
                  </span>

                  <h3>{module.title}</h3>

                </div>

                {isOpen ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}

              </button>

              {isOpen && (

                <div className="accordion-body">

                  <ul>

                    {module.topics.map((topic) => (

                      <li key={topic}>
                        ✔ {topic}
                      </li>

                    ))}

                  </ul>

                </div>

              )}

            </div>

          );

        })}

      </div>

    </section>
  );
}

export default CourseCurriculum;