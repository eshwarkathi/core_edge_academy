import infosys from "../../assets/companies/infosys.png";
import tcs from "../../assets/companies/tcs.png";
import accenture from "../../assets/companies/accenture.png";
import wipro from "../../assets/companies/wipro.png";
import ibm from "../../assets/companies/ibm.png";
import deloitte from "../../assets/companies/deloitte.png";

const companies = [
  infosys,
  tcs,
  accenture,
  wipro,
  ibm,
  deloitte,
];

function CourseCompanies() {
  return (
    <section className="course-companies">

      <p className="companies-title">
        Trusted by <span>300+</span> Hiring Partners
      </p>

      <div className="companies-slider">

        {companies.map((logo, index) => (

          <div className="company-box" key={index}>

            <img
              src={logo}
              alt="company"
            />

          </div>

        ))}

      </div>

    </section>
  );
}

export default CourseCompanies; //