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

// services API
app.post('/services', async (req, res) => {
    try {
        const { id, name, description, price } = req.body;
        let result = await knex('SERVICES').insert({ SERVICE_ID: id, NAME: name, DESCRIPTION: description, PRICE: price });
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

// LOGIN API
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // First, check in CAREGIVER table
        const caregiver = await knex('CAREGIVER').where({ EMAIL: email }).first();

        if (caregiver) {
            // Compare password
            if (caregiver.PASSWORD !== password) { // Plain text password comparison
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            return res.status(200).json({
                message: 'Login successful',
                user: {
                    id: caregiver.CAREGIVER_ID,
                    email: caregiver.EMAIL,
                    role: 'caregiver'
                }
            });
        }

        // Then, check in CUSTOMER table
        const customer = await knex('CUSTOMER').where({ EMAIL: email }).first();

        if (customer) {
            // Compare password
            if (customer.PASSWORD !== password) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            return res.status(200).json({
                message: 'Login successful',
                user: {
                    id: customer.CUSTOMER_ID,
                    email: customer.EMAIL,
                    role: 'customer'
                }
            });
        }

        // If user not found in either
        return res.status(401).json({ message: 'Invalid credentials' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Login failed' });
    }
});



//  customer signup api
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
