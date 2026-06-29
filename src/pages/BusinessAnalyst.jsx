import CourseLayout from "../components/CourseLayout";
import { courses } from "../data/courses";

function BusinessAnalyst() {
  return <CourseLayout {...courses.ba} />;
}

export default BusinessAnalyst;