import { teacherModel } from "../models/teacher.model.js"
import jwtService from "./jwt.service.js"
import bcrypt from 'bcrypt'

class teacherService {
    constructor() {
        this.jwt = new jwtService()
        this.model = teacherModel
    }

    async createstaff(body) {
        const create = (await this.model.create(body)).populate('staffId')
        return create
    }

    async loginStaff({ username, password }) {
        const findUsername = await this.model.findOne({ username: username })
        if (!findUsername) throw new Error("iltimos avval royxatdan oting")
        const comparePassword = await bcrypt.compare(password, findUsername.password)
        if (!comparePassword) throw new Error("username or password incorect")
        const token = this.jwt.generateToken(findUsername.role, findUsername._id)
        return { findUsername, token }
    }
}

export default teacherService