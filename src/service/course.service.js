import { courseModel } from "../models/course.model.js"

class CourseService {
    constructor() {
        this.model = courseModel
    }

    async createCourse(body) {
        const create = await this.model.create(body)
        return create
    }
}

export default CourseService