import { StudentModel } from "../models/student.model.js"
import jwtService from "./jwt.service.js"
import bcrypt from 'bcrypt'

class staffStudentService {
    constructor() {
        this.jwt = new jwtService()
        this.model = StudentModel
    }

    async createStudent(body) {
        const hashedPassword = await bcrypt.hash(body.password, 12)
        body.password = hashedPassword
        const create = await this.model.create(body)
        return create
    }

    async loginStudent({username,password}) {
        const findUsername = await this.model.findOne({ username: username })
        if (!findUsername) throw new Error("iltimos avval royxatdan oting")
        const comparePassword = await bcrypt.compare(password,findUsername.password)
        if (!comparePassword) throw new Error("username or password incorect")
        const token = this.jwt.generateToken(findUsername.role, findUsername._id)
        return {findUsername,token}
    }
}

export default staffStudentService