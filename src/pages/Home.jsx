import Layout from "../components/Layout";
import Hero from "../components/Hero";
import CourseSection from "../components/CourseSection";
import Audience from "../components/Audience";
import WhyUs from "../components/WhyUs";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import HiringPartners from "../components/HiringPartners";
import Successstories from "../components/Successstories";

function Home() {
  return (
    <Layout>
      <Hero />
      <CourseSection />
      <Audience />
      <WhyUs />
     

      
      <Successstories />

      <FAQ />
      <HiringPartners />
      <Contact />
    </Layout>
  );
}

export default Home;
