import { Router } from "express";
import AuthMiddleware from "../middleware/auth.middlewares.js";
import RoleMiddleware from "../middleware/role.middleware.js";
import attendanceDeatilController from "../controller/attendence.detail.controller.js";

const AttenenceDetailRoute = Router()

const controller = new attendanceDeatilController()

AttenenceDetailRoute.post('/lessons/:lessonId/attendance', AuthMiddleware, RoleMiddleware('teacher', 'admin','superadmin'), (req, res, next) => controller.createAttendence(req, res, next))

export default AttenenceDetailRoute