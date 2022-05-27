const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const db = require("./models");

//Routes
const students = require("./routes/students");
app.use("/students", students);

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