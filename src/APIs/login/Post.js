const encrypt = require("encryptjs");
const mysql = require("../../database/mysql");

module.exports = (req, res) => {

    mysql.select('email', req.body.email, (err, result) => {
        if (err) {
            console.log("error ", err);
            res.render("login", {
                errorMsg: "Have some issues for login please try again."
            });
        } else if (result && result.length) {
            if (result[0].password && encrypt.decrypt(result[0].password, "mytest", 256) == req.body.password) {
                res.render("home",{
                    Name : result[0].name,
                    Email : result[0].email
                });
            } else {
                res.render("login", {
                    errorMsg: "Entered password is wrong.Please try again."
                });
            }
        } else {
            res.render("login", {
                errorMsg: req.body.email + " is not register."
            });
        }
    });
}