const express = require('express')
const router = express.Router();
const studentsBL = require('../BLs/studentsBL')





router.route('/').get(async (req, resp) => {
    let data = await studentsBL.getAllStudents()
    return resp.json(data)
})




router.route('/:id').get(async (req, resp) => {
    let id = req.params.id
    let student = await studentsBL.getStudentsById(id)
    return resp.json(student)
})





router.route('/:id').put(async (req, resp) => {
    try {
        let id = req.params.id
        let studentToUpdate = req.body
        let status = await studentsBL.updateStudentAsync(id, studentToUpdate)
        return resp.json(status)
    }
    catch (err) {
        console.log(err);
    }

})


router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id
    let status = await studentsBL.deleteStudent(id)
    return resp.json(status)
})

router.route('/').post(async (req, resp) => {
    let newStudent = req.body
    let status = await studentsBL.addStudent(newStudent)
    return resp.json(status)
})


router.route('/grade/:id').post(async (req, resp) => {
    let id = req.params.id
    let gradeObj = req.body
    let status = await studentsBL.addGradeToStudent(id, gradeObj)
    return resp.json(status)
})

router.route('/grade/:stuId/:gradeId').put(async (req, resp) => {
    let stuId = req.params.stuId
    let gradeId = req.params.gradeId
    let gradeToUpdate = req.body
    let status = await studentsBL.updateGradeToStudent(stuId, gradeId, gradeToUpdate)
    return resp.json(status)
})





module.exports = router;