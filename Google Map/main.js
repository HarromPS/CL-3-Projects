// server.js

const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware

const app = express();
const API_KEY = process.env.API_KEY;

// Use the cors middleware
app.use(cors());

// Route to handle requests from the client
app.get('/api/data', async (req, res) => {
    try {
        res.json({api:API_KEY});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
