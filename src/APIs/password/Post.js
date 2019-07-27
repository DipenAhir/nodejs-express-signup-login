const encrypt = require("encryptjs");
const mysql = require("../../database/mysql");

module.exports = (req, res) => {
    mysql.select('email', req.body.email, (err, result) => {
        if (err) {
            res.render("login", {
                errorMsg: "password not update successfully, Please try again."
            });
        }
        if (result[0].password && encrypt.decrypt(result[0].password, "mytest", 256) == req.body.currentPassword) {
            mysql.update(`password='${encrypt.encrypt(req.body.password, "mytest", 256)}'`, `email='${req.body.email}'`, (err, re) => {
                if (err) {
                    res.render("login", {
                        errorMsg: "password not update successfully, Please try again."
                    });
                } else {
                    res.render("home", {
                        successMsg: "password updated successfully.",
                        Name: result[0].name,
                        Email: req.body.email
                    });
                }
            });
        } else {
            res.render("home", {
                errorMsg: "Current password not match, please enter currect password.",
                Name: result[0].name,
                Email: req.body.email
            });
        }
    });
}