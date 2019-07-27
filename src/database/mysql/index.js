var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'remotemysql.com',
    database: 'S9uQ4fzwxj',
    user: 'S9uQ4fzwxj',
    password: 'AvWOSKNx6y',
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("MySqlDB Connected!");
});

function insertData(fields = "", values = "", callback) {
    connection.query(`insert into users(${fields}) values(${values})`,
        function (error, results, fields) {
            callback(error, results, fields)
        });
}

function select(field = "", value = "", callback) {
    connection.query(`select * from users where ${field}='${value}'`,
        function (error, results, fields) {
            callback(error, results, fields)
        });
}

function update(fieldAndValue = "", condition = "", callback) {
    connection.query(`update  users  set ${fieldAndValue} where ${condition}`,
        function (error, results, fields) {
            callback(error, results, fields)
        });
}

module.exports = {
    insertData,
    select,
    update
}  
