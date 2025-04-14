import { Router } from "express";
import AuthMiddleware from "../middleware/auth.middlewares.js";
import RoleMiddleware from "../middleware/role.middleware.js";
import groupController from "../controller/group.controller.js";

const groupRoute = Router()

const controller = new groupController()

groupRoute.post('/groups',AuthMiddleware,RoleMiddleware('admin','superadmin'),(req,res,next) => controller.creategroup(req,res,next))

export default groupRoute