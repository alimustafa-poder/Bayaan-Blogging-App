import express from 'express'
import { userSignUp, userLogin } from '../controller/userController.js'

const router = express.Router()

router.post('/login', userLogin)

router.post('/signup', userSignUp)

export default router
