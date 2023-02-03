import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const createToken = (id) => {
    return jwt.sign(
        {
            id,
        },
        process.env.SECRET_KEY,
        {
            expiresIn: '1d',
        }
    )
}

const userSignUp = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.signup(email, password)
        //create Token
        const token = createToken(user)
        //send token to client
        res.status(200).json({
            email,
            token,
        })
    } catch (error) {
        res.status(404).json({
            error: error.message,
        })
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        const token = createToken(user)

        res.status(200).json({
            email,
            token,
        })
    } catch (err) {
        res.status(404).json({
            error: err.message,
        })
    }
}

export { userSignUp, userLogin }
