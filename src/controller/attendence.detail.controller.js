import AttendanceDetailService from "../service/attendence.detail.service.js"

class attendanceDeatilController {
    constructor() {
        this.service = new AttendanceDetailService()
    }

    async createAttendence(req, res, next) {
        try {
            const { lessonId } = req.params
            const { body } = req
            const data = await this.service.createAttendence(lessonId, body,req.roleID)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

}

export default attendanceDeatilController