
function HiringPartners() {
  const companies = [
    "Infosys",
    "TCS",
    "Accenture",
    "Wipro",
    "IBM",
    "Deloitte",
    "Capgemini",
    "Cognizant",
    "Tech Mahindra",
    "HCL",
    "Oracle",
    "Amazon",
  ];

  return (
    <section className="hiring-section">

      <div className="sec-head">

        <p className="eyebrow">~/hiring-partners</p>

        <h2>Our Hiring Partners</h2>

        <p className="sec-sub">
          Our students have opportunities with leading companies across India.
        </p>

      </div>

      <div className="logo-slider">

        <div className="logo-track">

          {[...companies, ...companies].map((company, index) => (

            <div className="logo-card" key={index}>
              {company}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HiringPartners;