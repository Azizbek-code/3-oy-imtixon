import AttenenceDetailRoute from "./attendence.detail.route.js"
import authStaffRout from "./auth.staffs.route.js"
import AuthStudentRout from "./auth.sturdent.route.js"
import CourseRout from "./courses.route.js"
import groupRoute from "./group.route.js"
import LessonRoute from "./lessons.route.js"
import paymentRout from "./payments.route.js"
import ForSmallRoute from "./small-Requests.route.js"
import RoutTeacher from "./teacher.route.js"

const Routes = () => [authStaffRout, AuthStudentRout, CourseRout, RoutTeacher, ForSmallRoute, groupRoute, LessonRoute, paymentRout, AttenenceDetailRoute]

export default Routes