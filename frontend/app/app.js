require('dotenv').config();
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`Capstone project ThaiTD3`)
})

module.exports = app;