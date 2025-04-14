import { attendancemodel } from "../models/attendance.model.js";
import { attendanceDetailmodel } from "../models/attendanceDetail.model.js";
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
                $match: { _id: (await createter)._id }
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

    async getAll(id) {
        const findAll = await this.model.find({group_id:id})
        const find = await this.atmodel.find({ lesson_id: findAll._id });
        return {
            ...find,
            ...findAll
        }
    }
}

export default lessonService