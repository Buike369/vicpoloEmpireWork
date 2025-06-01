require('dotenv').config();
const mysql = require('mysql2')

const db = mysql.createPool({
    connectionLimit: 10,
    host: `${process.env.DB_HOST}`,
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_NAME}`
  
})

db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connection', err)
    } else {

        console.log("successful connection going")

    }
})

module.exports = { db }




