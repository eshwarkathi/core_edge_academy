import CourseLayout from "../components/CourseLayout";
import { courses } from "../data/courses";

function CyberSecurity() {
  return <CourseLayout {...courses.cyber} />;
}

export default CyberSecurity;