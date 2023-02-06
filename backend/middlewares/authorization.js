import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/userModel.js'

dotenv.config()

const authorization = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({
            message: 'Auther failed',
        })
    }

    const token = req.headers.authorization.split(' ')[1]

    try {
        const { _id } = jwt.verify(token, process.env.SECRET_KEY)
        req.user = await User.findOne({ _id }).select('_id')
        next()
    } catch (error) {
        return res.status(401).json({
            errorName: error.name,
            errorMessage: 'Authentication failed. Try Logging in Again.',
        })
    }
}

export default authorization
