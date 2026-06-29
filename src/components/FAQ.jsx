import { useState } from "react";

const faqs = [
  {
    q: "Do you provide placement assistance?",
    a: "Yes. We provide resume building, mock interviews, aptitude training, HR preparation, and placement assistance.",
  },
  {
    q: "Are classes online or offline?",
    a: "Both. You can attend classes online from anywhere or visit our Ameerpet campus.",
  },
  {
    q: "Will I get live projects?",
    a: "Yes. Every course includes real-time live projects to build your portfolio.",
  },
  {
    q: "Who can join Core Edge Academy?",
    a: "Freshers, graduates, working professionals, and career switchers can join.",
  },
  {
    q: "Do you provide certificates?",
    a: "Yes. Course completion certificates are provided after successful completion.",
  },
  {
    q: "How do I enroll?",
    a: "Call or WhatsApp us to know about upcoming batches, course fees, demo classes, and complete syllabus.",
  },
];

function FAQ() {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="faq-layout">

        {/* Left Side */}
        <aside className="faq-aside">

          <p className="eyebrow">~/faq</p>

          <h2>
            Frequently
            <br />
            Asked Questions
          </h2>

          <p className="sec-sub">
            Everything you need to know before joining
            <strong> Core Edge Academy.</strong>
          </p>

          {/* Terminal Card */}

          <div className="term">

            <div className="term-bar">
              <span></span>
              <span></span>
              <span></span>

              <em>terminal</em>
            </div>

            <div className="term-body">

              <p>
                <span className="term-pp">student@core-edge</span>
                :
                <span className="term-path">~</span>
                $ help
              </p>

              <p className="term-out">
                ✓ Live Online & Offline Classes
              </p>

              <p className="term-out">
                ✓ Industry Experts
              </p>

              <p className="term-out">
                ✓ Real-Time Projects
              </p>

              <p className="term-out">
                ✓ Placement Assistance
              </p>

              <p className="term-out">
                ✓ Certification Support
              </p>

              <p className="term-blink">
                <i></i> Ready to build your career...
              </p>

            </div>

          </div>

          <a href="#contact" className="faq-call">
            Still have questions? Talk to a Mentor →
          </a>

        </aside>

        {/* Right Side */}

        <div className="faq">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${
                active === index ? "open" : ""
              }`}
            >
              <button
                className="faq-summary"
                onClick={() => toggleFAQ(index)}
              >

                <span className="faq-no">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <span className="faq-q">
                  {faq.q}
                </span>

                <span className="faq-sign"></span>

              </button>

              <div className="faq-a-wrap">

                <div className="faq-a-inner">

                  <div className="faq-a">
                    {faq.a}
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;