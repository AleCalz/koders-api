/* eslint-disable */
const MentorsModel = require('../models/mentors.model')


async function getAll() {
    const getAll = await MentorsModel.find()
    return getAll
}

async function getById(id) {
    const mentorById = await MentorsModel.findById(id) 
    return mentorById
}

async function add(mentorData) {
    const newMentor = await MentorsModel.create(mentorData)
    return newMentor
}

async function deleteById(id) {
    const delMentor = await MentorsModel.findByIdAndDelete(id)
    return delMentor
}

async function UpdateById(id, mentorsData) {
    const updateMentor = await MentorsModel.findByIdAndDelete(id, mentorsData, {
        new: true,
    })
    return updateMentor
}

module.exports = { getAll, getById, add, deleteById, UpdateById}

