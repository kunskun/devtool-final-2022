const express = require("express");

const router = express.Router();

const Course = require("../models/courses")

router.post('/add', async(req, res) => {
    try {
        const {course, faculty, branch, semester, year, note, admitRound, program, startDate, endDate} = req.body;
        const item = await Course.create({
            course: course, 
            faculty: faculty,
            branch: branch, 
            semester: semester, 
            year: year, 
            note: note, 
            admitRound: admitRound, 
            program: program, 
            startDate: startDate, 
            endDate: endDate
        })
        res.send(item)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

router.get('/all', async (req, res) => {
    try {
        const courses = await Course.find()
        res.send(courses)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})

router.put('/edit', async (req, res) => {
    try {
        const {course, branch, semester, year, note, admitRound, program, startDate, endDate} = req.body;
        Course.findByIdAndUpdate(id, {
            "course": course, 
            "faculty": faculty,
            "branch": branch, 
            "semester": semester, 
            "year": year, 
            "note": note, 
            "admitRound": admitRound, 
            "program": program, 
            "startDate": startDate, 
            "endDate": endDate}, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})

router.delete('/del', async (req, res) => {
    try {
        const { id } = req.headers;
        // console.log(req)
        console.log('del', id)
        Member.findByIdAndDelete(id, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})

module.exports = router;