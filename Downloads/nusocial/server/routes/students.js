const express = require("express");
const router = express.Router();

const {Students} = require("../models");

router.get("/", async (req,res) => {
        const students = await Students.findAll();
        res.json(students);
    });

    router.post("/", async (req, res) => {
        const values = {
            username : req.body.username,
            password : req.body.password,
            course: req.body.course,  
        };
        Students.create(values);
   res.status(201).json(values);
    })

module.exports = router;