import lessonService from "../service/lessons.service.js"

class lessonController {
    constructor() {
        this.service = new lessonService()
    }

    async createLessons(req, res, next) {
        try {
            const { body } = req
            const data = await this.service.createlesson(body)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    async getAll(req, res, next){
        try {
            const { groupId } = req.params
            const data = await this.service.getAll(groupId)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

export default lessonController