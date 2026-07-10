import accentureLogo from "../assets/companies/Accenture.svg.webp";
import deloitteLogo from "../assets/companies/Deloitte_logo.svg.webp";
import ibmLogo from "../assets/companies/IBM_logo.svg.webp";
import infosysLogo from "../assets/companies/Infosys_logo.svg.webp";
import tcsLogo from "../assets/companies/TCS.svg.webp";
import wiproLogo from "../assets/companies/Wipro.svg.webp";

function HiringPartners() {

  const companies = [
    { name: "TCS", logo: tcsLogo },
    { name: "Infosys", logo: infosysLogo },
    { name: "Accenture", logo: accentureLogo },
    { name: "IBM", logo: ibmLogo },
    { name: "Wipro", logo: wiproLogo },
    { name: "Deloitte", logo: deloitteLogo },
  ];

  return (

    <section className="hiring-section">

      <div className="container">

        <div className="sec-head">

          <p className="eyebrow">~/HIRING PARTNERS</p>

          <h2>Our Hiring Partners</h2>

          <p className="sec-sub">
            Our students have opportunities with leading companies across India.
          </p>

        </div>

        <div className="logo-slider">

          <div className="logo-track">

            {[...companies, ...companies].map((company, index) => (

              <div className="logo-item" key={`${company.name}-${index}`}>

                <img
                  src={company.logo}
                  alt={company.name}
                  loading="lazy"
                  draggable="false"
                />

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}

export default HiringPartners;