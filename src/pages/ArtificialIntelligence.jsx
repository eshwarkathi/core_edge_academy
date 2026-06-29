import CourseLayout from "../components/CourseLayout";
import { courses } from "../data/courses";

function ArtificialIntelligence() {
  return <CourseLayout {...courses.ai} />;
}

export default ArtificialIntelligence;