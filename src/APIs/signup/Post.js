const encrypt = require("encryptjs");
const mysql = require("../../database/mysql");

module.exports = (req, res) => {
    mysql.insertData("email,password,name", `'${req.body.email.toLowerCase()}','${encrypt.encrypt(req.body.password, "mytest", 256)}','${req.body.name.toLowerCase()}'`, (err, result) => {
        if (err) {
            switch (err.code) {
                case 'ER_DUP_ENTRY': {
                    res.render("signup", {
                        errorMsg: req.body.email + " is already used, Please use another email-id and try again."
                    });
                    break;
                }
                default: {
                    res.render("signup", {
                        errorMsg: "Have some issues for signup please try again."
                    });
                }
            }
        }
        res.render("login", {
            successMsg: "You have successfully signup.You can Login now"
        });
    });
}