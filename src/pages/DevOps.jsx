import CourseLayout from "../components/CourseLayout";
import { courses } from "../data/courses";

function DevOps() {
  return <CourseLayout {...courses.devops} />;
}

export default DevOps;