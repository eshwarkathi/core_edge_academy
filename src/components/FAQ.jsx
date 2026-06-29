import { useState } from "react";

const faqs = [
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes. We provide resume building, mock interviews, aptitude training, HR preparation, and placement assistance."
  },
  {
    question: "Are classes online or offline?",
    answer:
      "Both. You can attend classes online from anywhere or visit our Ameerpet campus."
  },
  {
    question: "Will I get live projects?",
    answer:
      "Yes. Every course includes real-time live projects to build your portfolio."
  },
  {
    question: "Who can join Core Edge Academy?",
    answer:
      "Freshers, graduates, working professionals, and career switchers can join."
  },
  {
    question: "Do you provide certificates?",
    answer:
      "Yes. Course completion certificates are provided after successful completion."
  }
];

function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="section" id="faq">

      <div className="sec-head">
        <p className="eyebrow">~/faq</p>
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="faq-container">

        {faqs.map((faq, index) => (

          <div className="faq-item" key={index}>

            <button
              className="faq-question"
              onClick={() =>
                setActive(active === index ? null : index)
              }
            >
              {faq.question}
            </button>

            {active === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;