import { Router } from "express";
import AuthMiddleware from "../middleware/auth.middlewares.js";
import RoleMiddleware from "../middleware/role.middleware.js";
import CorseController from "../controller/course.controller.js";

const CourseRout = Router()
const controller = new CorseController()

CourseRout.post('/create/course',AuthMiddleware,RoleMiddleware('admin','superadmin'),(req,res,next) => controller.createController(req,res,next))

export default CourseRout