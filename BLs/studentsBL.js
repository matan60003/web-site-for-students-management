
const Student = require('../models/studentsModel')

const getAllStudents = () => {
    console.log("We are on GetAllStudents BL")
    return new Promise((resolve, reject) => {
        Student.find({}, (err, data) => {
            if (err) {
                reject(err)
            } else {
                console.log("data form db: " + data);
                resolve(data)
            }
        })
    })
}


const getStudentsById = (id) => {
    return new Promise((resolve, reject) => {
        Student.find({ _id: id }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


const addGradeToStudent = (id, addGrade) => {
    return new Promise((resolve, reject) => {
        Student.findById(id, (err, stu) => {
            if (err) {
                reject(err)
            } else {
                stu.grades.push(addGrade)

                Student.findByIdAndUpdate(id, stu, (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve('Grade wes Succefully Updated')
                    }
                })
            }
        })
    })
}








const updateGradeToStudent = (idStu, idGrd, updataGrade) => {
    return new Promise((resolve, reject) => {
        Student.findById(idStu, (err, stu) => {
            if (err) {
                reject(err)
            } else {
                stu.grades.forEach(grd => {
                    if (grd._id == idGrd) {
                        grd.date = updataGrade.date
                        grd.grade = updataGrade.grade

                    }
                })

                Student.findByIdAndUpdate(idStu, stu, (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve("The Grade wes Succefully Updated ")
                    }
                })





                // stu.grades.switch(updataGrade)

                // Student.findByIdAndUpdate(id, stu, (err) => {
                //     if (err) {
                //         reject(err)
                //     } else {
                //         resolve('Grade wes Succefully Changed')
                //     }
                // })
            }
        })
    })
}







const updateStudentAsync = (id, studentToUpdate) => {
    return new Promise((resolve, reject) => {
        Student.findByIdAndUpdate(id,
            {
                fullName: studentToUpdate.fullName,
                email: studentToUpdate.email,
                faculty: studentToUpdate.faculty,
                birthDate: studentToUpdate.birthDate,
                grades: studentToUpdate.grades
            }, (err) => {
                if (err)
                    reject(err)
                else
                    resolve('Student wes Succefully Updated')
            })
    })
}









const deleteStudent = (id) => {
    return new Promise((resolve, reject) => {
        Student.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("Student deleted succefully")
            }
        })
    })
}


const addStudent = (studentObj) => {
    return new Promise((resolve, reject) => {
        let newStudent = new Student({
            fullName: studentObj.fullName,
            email: studentObj.email,
            faculty: studentObj.faculty,
            birthDate: studentObj.birthDate,
            grades: []
        })
        newStudent.save((err) => {
            err ? reject(err) : resolve("Student Created")
        })
    })

}


module.exports = {
    getStudentsById,
    getAllStudents,
    updateStudentAsync,
    deleteStudent,
    addStudent,
    addGradeToStudent,
    updateGradeToStudent
}