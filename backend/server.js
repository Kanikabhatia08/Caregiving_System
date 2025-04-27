const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('knex')(require("./knex"))

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Basic Route
app.get('/', async (req, res) => {
    let result = await knex.raw(`select * from EMPLOYEES`)
    console.log(result)
    res.json(result)
});


app.post('/services', async (req, res) => {
    try {
        const { name, description, price } = req.body;
        let result = await knex('SERVICES').insert({ SERVICE_ID: "23423", NAME: name, DESCRIPTION: description, PRICE: price });
        return res.status(201).json({
            message: 'Service created Sucessfully',
            result
        })
    } catch (error) {
        console.log(error)
    }
})


function generateRandomId(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters[randomIndex];
    }
    return randomId;
}



app.post('/signup-customer', async (req, res) => {
    try {
        const { name, phone, address, email, password, role } = req.body;
        const randomId = generateRandomId(10); // You can change the length as needed
        console.log(randomId);
        let result = await knex('CUSTOMERS').insert({
            CUSTOMER_ID: randomId,
            NAME: name,
            EMAIL: email,
            PHONE_NO: phone,
            ADDRESS: address,
            PASS: password
        })
        return res.json({
            message: 'succesfully registerd customer'
        })
    } catch (error) {
        console.log(error)
    }
})

app.post('/signup-caregiver', async (req, res) => {
    try {
        const { name, phone, address, email, password, experience, specialization, role } = req.body;
        const randomId = generateRandomId(10);
        let result = await knex('CAREGIVER').insert({
            CAREGIVER_ID: randomId,
            NAME: name,
            EMAIL: email,
            PHONE_NO: phone,
            ADDRESS: address,
            EXPERIENCE: experience,
            SPECIALIZATION: specialization,
            PASS: password
        })
        return res.json({
            message: 'succesfully registerd caregiver'
        })
    }
    catch (error) {
        console.log(error)
    }
})

app.post('/bookings', async (req, res) => {
    try {
        const { startDate, endDate, totalCost, paymentStatus } = req.body;
        const randomId = generateRandomId(10); // You can change the length as needed
        console.log(randomId);
        let result = await knex('BOOKINGS').insert({
            BOOKING_ID: randomId,
            START_DATE: startDate,
            END_DATE: endDate,
            TOTAL_COST: totalCost,
            PAYMENT_STATUS: paymentStatus
        })
        return res.json({
            message: 'succesfully registerd bookings'
        })
    } catch (error) {
        console.log(error)
    }
})

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
