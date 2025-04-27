const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON from frontend

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',          // (blank, if you didn't set a password during XAMPP installation)
    database: 'caregiving_system'    // your database name
});

// Connect to database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Server listening
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

app.post('/signup-caregiver', (req, res) => {
    const { name, email, password, phone } = req.body;

    const sql = 'INSERT INTO caregiver (name, email, password, phone) VALUES (?, ?, ?, ?)';
    const values = [name, email, password, phone];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Caregiver signup error: ', err);
            return res.status(500).json({ message: 'Caregiver signup failed' });
        }
        res.status(200).json({ message: 'Caregiver signed up successfully', id: result.insertId });
    });
});

app.post('/signup-customer', (req, res) => {
    const { name, email, password, phone } = req.body;

    const sql = 'INSERT INTO customer (name, email, password, phone) VALUES (?, ?, ?, ?)';
    const values = [name, email, password, phone];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Customer signup error: ', err);
            return res.status(500).json({ message: 'Customer signup failed' });
        }
        res.status(200).json({ message: 'Customer signed up successfully', id: result.insertId });
    });
});