import CourseLayout from "../components/CourseLayout";
import { courses } from "../data/courses";

function AutomationTesting() {
  return <CourseLayout {...courses.testing} />;
}

export default AutomationTesting;

