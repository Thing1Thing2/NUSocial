const express = require("express");
const router = express.Router();

const {Students} = require("../models");

router.get("/student-home", async (req,res) => {
    const students = await Students.findAll();
    res.json(students);
});

module.exports = router;
