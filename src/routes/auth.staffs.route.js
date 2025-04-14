import { Router } from "express";
import staffAuthController from "../controller/staff.auth.controller.js";
import AuthMiddleware from "../middleware/auth.middlewares.js";
import RoleMiddleware from "../middleware/role.middleware.js";

const authStaffRout = Router()
const controller = new staffAuthController()

authStaffRout.post('/register/staff',AuthMiddleware,RoleMiddleware('superadmin'),(req,res,next) => controller.createStaff(req,res,next))
authStaffRout.post('/login/staff',(req,res,next) => controller.loginStaff(req,res,next))

export default authStaffRout