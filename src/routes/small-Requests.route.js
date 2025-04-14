import { Router } from "express";
import AuthMiddleware from "../middleware/auth.middlewares.js";
import RoleMiddleware from "../middleware/role.middleware.js";
import forSmallRequests from "../controller/small-Requests.controller.js";

const ForSmallRoute = Router()
const controller = new forSmallRequests()

ForSmallRoute.get('/get', AuthMiddleware, RoleMiddleware('admin', 'superadmin'), (req, res, next) => controller.getAll(req, res, next))

export default ForSmallRoute