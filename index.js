
const express = require('express')
const cors = require('cors')
const studentsController = require('./Controllers/studentsController')
require('./configs/database')

const app = express();
app.use(cors())
app.use(express.json());
// app.use(express.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use("/students", studentsController);

app.listen(8000,
    () => console.log("The server is Running on port 8000")
);


