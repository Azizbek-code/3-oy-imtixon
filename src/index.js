import express from 'express'
import 'dotenv/config.js'
import Routes from './routes/routes.js'
import errorMiddleware from './middleware/error.middlewares.js'
import initDb from './config/db.js'
const app = express()

const port = process.env.PORT
app.use(express.json())
app.use('/api', Routes())
app.use(express.urlencoded({ extended: true }))
app.use(errorMiddleware)

const initApp = async () => {
    try {
        await initDb();
        console.log("Database connected");
        app.listen(port, 'localhost', () => console.log(`server is running on port ${port}`))
    } catch (error) {
        console.error(error.message)
    }
};

initApp()