import validator from 'validator'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema
const User = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
})

User.statics.signup = async function (email, password) {
    if (!email || !password) {
        throw Error("Email and Password fields can't be empty.")
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is invalid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough.')
    }
    const exists = await this.findOne({
        email,
    })
    if (exists) {
        throw Error('Email already in use.')
    }
    const hash = await bcrypt.hash(password, 10)
    const user = await this.create({
        email,
        password: hash,
    })

    return user
}

User.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error("Email and Password fields can't be empty.")
    }
    const exists = await this.findOne({
        email,
    })
    if (!exists) {
        throw Error('Email does not exist.')
    }
    const hash = exists.password
    const compare = await bcrypt.compare(password, hash)
    if (compare) {
        return exists
    }
    throw Error('Email or Password is incorrect.')
}

export default mongoose.model('User', User)
