import { Router } from "express";
import AuthMiddleware from "../middleware/auth.middlewares.js";
import RoleMiddleware from "../middleware/role.middleware.js";
import paymentController from "../controller/payment.controller.js";

const paymentRout = Router()
const controller = new paymentController()

paymentRout.post('/payments', AuthMiddleware, RoleMiddleware('admin', 'superadmin'), (req, res, next) => controller.createPayment(req, res, next))

export default paymentRout