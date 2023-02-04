import mongoose from 'mongoose'
const Schema = mongoose.Schema

const testSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

export default mongoose.model('testApp', testSchema)
