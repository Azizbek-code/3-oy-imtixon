import { attendanceDetailmodel } from "../models/attendanceDetail.model.js";
import { attendancemodel } from "../models/attendance.model.js";
import { lessonModel } from "../models/lesson.model.js";

class lessonService {
    constructor() {
        this.model = lessonModel
        this.atendModel = attendanceDetailmodel
        this.atmodel = attendancemodel
    }

    async createlesson(data) {
        const createter = await this.model.create(data)
        const populateData = await this.model.aggregate([
            {
                $match: { _id: createter._id }
            },
            {
                $lookup: {
                    from: "groups",
                    localField: "group_id",
                    foreignField: "_id",
                    as: "groups"
                }
            },
            {
                $unwind: {
                    path: "$groups",
                    preserveNullAndEmptyArrays: true
                }
            }
        ]);
        return populateData
    }

    async getAll(id, endDate, startDate) {
        const find = await this.model.findOne({
            group_id: id,
            lesson_date: {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            }
        });
        const findAttendences = await this.atmodel.find({ lesson_id: find._id })
        const countPresent = await this.atendModel.countDocuments({ attendance_id: findAttendences._id, status: 'present' })
        const countlate = await this.atendModel.countDocuments({ attendance_id: findAttendences._id, status: 'late' })
        const countabsent = await this.atendModel.countDocuments({ attendance_id: findAttendences._id, status: 'abent' })
        const total = countPresent + countlate + countabsent
        const data = {
            find,
            attendence: {
                total: total,
                present: countPresent,
                absent: countabsent,
                late: countlate
            }
        }
        return data
    }
}

export default lessonService