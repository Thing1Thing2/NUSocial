const express = require("express");
const router = express.Router();

const {Students} = require("../models");

router.get("/students-register", async (req,res) => {
        const students = await Students.findAll();
        res.json(students);
    });

    router.post("/students-register", async (req, res) => {
        const values = {
            username : req.body.username,
            password : req.body.password,
            course: req.body.course,  
        };
        const createdStudent = await Students.create(values);
   res.json(createdStudent);
    })

module.exports = router;