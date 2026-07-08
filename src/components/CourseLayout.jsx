import Layout from "./Layout";
import CourseHero from "./courses/CourseHero";
import CourseOverview from "./courses/CourseOverview";
import CourseJourney from "./courses/CourseJourney";
import CourseStats from "./courses/CourseStats";
import CourseCurriculum from "./courses/CourseCurriculum";
import CourseCareer from "./courses/CourseCareer";
import CoursePlacement from "./courses/CoursePlacement";
import CourseHighlights from "./courses/CourseHighlights";
import CourseTechnologies from "./courses/CourseTechnologies";

function CourseLayout({
  image,
  title,
  subtitle,
  overview,
  duration,
  mode,
  rating,
  students,
   brochure,

  highlights = [],
  curriculum = [],
  technologies = [],
  tools = [],
  skills = [],
  learningOutcomes = [],
  projects = [],
  applications = [],
  certification = [],
  careers = [],
  placement = [],
  faqs = [],
}){
  return (
    <Layout>
      <div className="course-page">

        {/* Hero Section */}

        <CourseHero
  image={image}
  title={title}
  subtitle={subtitle}
  rating={rating}
  students={students}
  duration={duration}
  mode={mode}
  brochure={brochure} 
/>
        {/* Overview */}

        <CourseOverview overview={overview} />
        
        {/* WHY CHOOSE */}


{/* STUDENT JOURNEY */}

<CourseJourney />

   {/* PLACEMENT STATS */}
    

    <CourseStats />
        {/* Highlights */}

        <CourseHighlights
    highlights={highlights}
/>

        {/* Curriculum */}

       <CourseCurriculum curriculum={curriculum} />

      

        {/* Technologies */}

        <CourseTechnologies
  technologies={technologies}
/>
        {/* Tools Covered */}





{/* Core Skills */}

{skills.length > 0 && (

<section className="course-section">

<h2>Core Skills</h2>

<div className="grid">

{skills.map((skill) => (

<div className="box" key={skill}>

⭐ {skill}

</div>

))}

</div>

</section>

)}

{/* Learning Outcomes */}

{learningOutcomes.length > 0 && (

<section className="course-section">

<h2>Learning Outcomes</h2>

<div className="grid">

{learningOutcomes.map((item) => (

<div className="box" key={item}>

✅ {item}

</div>

))}

</div>

</section>

)}

{/* Industry Applications */}

{applications.length > 0 && (

<section className="course-section">

<h2>Industry Applications</h2>

<div className="grid">

{applications.map((item) => (

<div className="box" key={item}>

🚀 {item}

</div>

))}

</div>

</section>

)}

{/* Certification */}

{certification.length > 0 && (

<section className="course-section">

<h2>Certification</h2>

<div className="grid">

{certification.map((item) => (

<div className="box" key={item}>

🏆 {item}

</div>

))}

</div>

</section>

)}

        {/* Projects */}

        

         

        {/* Careers */}

        <CourseCareer careers={careers} />

        

        {/* Placement Assistance */}

        <CoursePlacement />
        
        {/* FAQ */}



      </div>
    </Layout>
  );
}

export default CourseLayout;
