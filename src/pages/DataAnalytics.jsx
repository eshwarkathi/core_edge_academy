import CourseLayout from "../components/CourseLayout";
import { courses } from "../data/courses";

function DataAnalytics() {
  return <CourseLayout {...courses.data} />;
}

export default DataAnalytics;