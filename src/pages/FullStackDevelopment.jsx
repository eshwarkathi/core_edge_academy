import CourseLayout from "../components/CourseLayout";
import { courses } from "../data/courses";

function FullStackDevelopment() {
  return <CourseLayout {...courses.fsd} />;
}

export default FullStackDevelopment;