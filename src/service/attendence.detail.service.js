import mog from "mongoose";
import { attendancemodel } from "../models/attendance.model.js";
import { attendanceDetailmodel } from "../models/attendanceDetail.model.js";


class AttendanceDetailService {
    constructor() {
        this.model = attendanceDetailmodel
        this.atmodel = attendancemodel
    }

    async createAttendence(id, data, roleId) {
        try {
            const createD = await this.atmodel.create({ lesson_id: id, created_by: roleId })
            data = {
                attendance_id: createD._id,
                ...data
            }
            const create = await this.model.create(data)
            return create
        } catch (error) {
            console.log(error);
        }
    }
}

export default AttendanceDetailService