const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "your_password",
    database: process.env.DB_NAME || "schoolDB"
});

db.connect((err) => {
    if (err) {
        console.error("DB Connection Error:", err.message);
    } else {
        console.log("MySQL Connected ✅");
    }
});

module.exports = db;
