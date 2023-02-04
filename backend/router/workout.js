import express from 'express'
import authorization from '../middlewares/authorization.js'

import {
    createTest,
    getAllTest,
    getSingleTest,
    deleteTest,
    updateTest,
} from '../controller/workoutController.js'

const router = express.Router()

router.use(authorization)

//Get everything
router.post('/getAll', getAllTest)

//Get a single workout
router.get('/:id', getSingleTest)

//Post a new workout
router.post('/', createTest)

//Delete a single workout
router.delete('/:id', deleteTest)

//Update a single workout
router.patch('/:id', updateTest)

export default router
