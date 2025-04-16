import { Router } from "express";
import AuthMiddleware from "../middleware/auth.middlewares.js";
import RoleMiddleware from "../middleware/role.middleware.js";
import lessonController from "../controller/lessons.controller.js";

const LessonRoute = Router()

const controller = new lessonController()

LessonRoute.post('/lessons', AuthMiddleware, RoleMiddleware('admin', 'superadmin'), (req, res, next) => controller.createLessons(req, res, next))

LessonRoute.get('/groups/:groupId/lessons', AuthMiddleware, RoleMiddleware('admin', 'superadmin', 'teacher'), (req, res, next) => controller.getAll(req, res, next))
export default LessonRoute