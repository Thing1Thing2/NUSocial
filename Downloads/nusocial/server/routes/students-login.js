const express = require("express");
const router = express.Router();

const {Students} = require("../models");

    router.post("/students-login", async (req, res) => {
        const values = {
            username : req.body.username,
            password : req.body.password,
            course: req.body.course,  
        };
        if (!values.username || !values.password) {
            res.redirect(200, '/students-login');
        } else {
        Students.findOne({where: {username: values.username, password: values.password}}).then(
            studentFound => {
                if (studentFound) {
                    passed = true;
                    return res.redirect(200,"/student-home");
                }
                return res.redirect(404, "/students-login");
            }
        );
        }
    });

module.exports = router;