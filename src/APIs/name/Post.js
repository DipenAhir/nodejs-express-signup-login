const encrypt = require("encryptjs");
const mysql = require("../../database/mysql");

module.exports = (req, res) => {
    mysql.update(`name='${req.body.name}'`, `email='${req.body.email}'`, (err, result) => {
        if (err) {
            res.render("login", {
                errorMsg: "Name not update successfully, Please try again."
            });
        } else {
            res.render("home", {
                successMsg: "Name update successfully.",
                Name: req.body.name,
                Email: req.body.email
            });
        }
    })
}