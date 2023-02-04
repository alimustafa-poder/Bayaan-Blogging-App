import testApp from '../models/schema.js'
import mongoose from 'mongoose'
import user from '../models/userModel.js'

//get all test
const getAllTest = async (req, res) => {
    const { email } = req.body
    const tests = await testApp.find({ email }).sort({ createdAt: -1 })
    res.status(200).json(tests)
}

//get a single test
const getSingleTest = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
            .status(404)
            .json({ error: 'There is no such blog in the db.', status: 404 })
    }

    const singleTest = await testApp.findById(id)
    if (!singleTest) {
        return res
            .status(404)
            .json({ error: 'No such workout exists.', status: 404 })
    }
    res.status(200).json(singleTest)
}
//create and post a single test
const createTest = async (req, res, next) => {
    const data = req.body

    //adding the document to the db
    try {
        const test = await testApp.create({ ...data })
        res.status(200).json({ test: test, status: 'ok' })
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

//update a single test
const updateTest = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No document to delete.' })
    }
    const updTest = await testApp.findOneAndUpdate({ _id: id }, { ...req.body })
    if (!updTest) {
        return res.status(404).json({ error: 'No object found to update.' })
    }
    res.status(200).json({ message: 'The object/test was updated.' })
}

//delete a single test
const deleteTest = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No document to delete.' })
    }
    const delTest = await testApp.findOneAndDelete({ _id: id })
    if (!delTest) {
        return res.status(404).json({ error: 'No object found to delete.' })
    }
    return res.status(200).json({ message: 'The object/test was deleted.' })
}
export { createTest, getAllTest, getSingleTest, updateTest, deleteTest }
