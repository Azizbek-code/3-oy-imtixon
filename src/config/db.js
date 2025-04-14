import mongoose from "mongoose";

const initDb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/fn2")
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

export default initDb