const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});



db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected");
});

app.get("/services", (req, res) => {
    db.query("SELECT * FROM services", (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});
