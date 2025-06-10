const express = require('express')
const route = express.Router()
const ai = require('../controllers/index')

route.post('/response', ai.generateResponse)

module.exports = route