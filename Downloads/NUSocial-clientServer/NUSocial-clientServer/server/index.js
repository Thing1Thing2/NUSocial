const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const db = require("./models");

//Routes
const students_register = require("./routes/students-register");
app.use("/", students_register);
const students_login = require("./routes/students-login");
app.use("/", students_login);
const student_home = require("./routes/student_home");
app.use("/", student_home);


db.sequelize
.sync()
.then( () => {
    app.listen(process.env.PORT || 3001, () => {
        console.log("server is started");
    });
})
.catch((err) => {
    console.log(`Error connecting: ${err.message}`);
});