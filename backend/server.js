import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'
import workoutRoutes from './router/workout.js'
import userRoutes from './router/user.js'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import rateLimit from 'express-rate-limit'
import SlowDown from 'express-slow-down'

const app = express()

const upload = multer()

app.use(upload.array())

// const rateLimit = require('express-rate-limit')

// //throttle http request for the user
// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 10, // Limit each IP to 10 requests per `window` (here, per 15 minutes)
//     standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//     legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// })
// app.use('/:id', limiter)

// const speedLimiter = SlowDown({
//     windowMs: 1 * 60 * 1000, // 1 minute
//     delayAfter: 1, // allow 1 requests per `windowMs`, then...
//     delayMs: 5000, // begin adding 500ms of delay per request above 100:
// })

// app.use("/api", speedLimiter)

//get the response in json
app.use(express.json())

//using morgan to log requests
app.use(morgan('dev'))

//using cors to make fetch requests
app.use(cors())

//routes
app.use('/api', userRoutes)
app.use('/api', workoutRoutes)

//connect to DB
mongoose
    .connect(process.env.MONG_URI)
    .then((data) => {
        app.listen(process.env.PORT, () => {
            console.log('Listening on Port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })
