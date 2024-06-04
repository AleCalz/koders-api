/* eslint-disable */
const express = require('express')
const mentorUseCase = require('../usecases/mentors.usecases')

const router = express.Router()

//Get Mentors
router.get('/', async (req, res) => {
    try {
        const allMentors = await mentorUseCase.getAll()

        res.json({
            success: true,
            data: allMentors
        })
        
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            success: false,
            Error: error.message
        })
    }
})