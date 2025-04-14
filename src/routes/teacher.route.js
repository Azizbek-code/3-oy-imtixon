import { Router } from "express";
import teacherContoller from "../controller/teaher.controller.js";

const RoutTeacher = Router()
const controller = new teacherContoller()

RoutTeacher.post('/create/teacher',(req,res,next) => controller.createTeacher(req,res,next))

export default RoutTeacher