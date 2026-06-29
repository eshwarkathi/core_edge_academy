import CourseLayout from "../components/CourseLayout";
import { courses } from "../data/courses";

function TableauAI() {
  return <CourseLayout {...courses.tableau} />;
}

export default TableauAI;