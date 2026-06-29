import CourseLayout from "../components/CourseLayout";
import { courses } from "../data/courses";

function FlutterDevelopment() {
  return <CourseLayout {...courses.flutter} />;
}

export default FlutterDevelopment;