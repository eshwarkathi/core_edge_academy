
import accentureLogo from "../assets/companies/accenture.png";
import deloitteLogo from "../assets/companies/deloitte.png";
import ibmLogo from "../assets/companies/ibm.png";
import infosysLogo from "../assets/companies/infosys.png";
import tcsLogo from "../assets/companies/tcs.png";
import wiproLogo from "../assets/companies/wipro.png";

function HiringPartners() {
  const companies = [
    { name: "Infosys", logo: infosysLogo },
    { name: "TCS", logo: tcsLogo },
    { name: "Accenture", logo: accentureLogo },
    { name: "Wipro", logo: wiproLogo },
    { name: "IBM", logo: ibmLogo },
    { name: "Deloitte", logo: deloitteLogo },
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

            <div className="logo-card" key={`${company.name}-${index}`}>
              <img src={company.logo} alt={`${company.name} logo`} />
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HiringPartners;
