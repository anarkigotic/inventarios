const mysql = require("mysql");
const configdb = require("../config/connection");

var connection = mysql.createConnection(configdb);


const query = (sql, params) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, params, (err, result) => {
            if (err) {
                console.log();
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.query = query