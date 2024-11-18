const moongoose = require('mongoose')

moongoose.connect("mongodb://localhost:27017/StudentsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
