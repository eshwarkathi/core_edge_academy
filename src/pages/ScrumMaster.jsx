import CourseLayout from "../components/CourseLayout";
import { courses } from "../data/courses";

function ScrumMaster() {
  return <CourseLayout {...courses.scrum} />;
}

export default ScrumMaster;