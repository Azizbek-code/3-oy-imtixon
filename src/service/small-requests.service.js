import { StudentModel } from "../models/student.model.js";

class forSmallRequestsService {
    constructor() {
        this.model = StudentModel
    }

    async getAllStudents() {
        const find = await this.model.find()
        return find
    }
}

export default forSmallRequestsService