import forSmallRequestsService from "../service/small-requests.service.js";

class forSmallRequests {
    constructor() {
        this.service = new forSmallRequestsService()
    }

    async getAll(req, res, next) {
        try {
            const data = await this.service.getAllStudents()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

export default forSmallRequests