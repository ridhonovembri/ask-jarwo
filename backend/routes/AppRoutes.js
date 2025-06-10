const express = require('express')
const route = express.Router()
const ai = require('../controllers/index')

// route.post('/response', ai.generateResponseOpenAI)
route.post('/response', ai.generateResponseGroq)

module.exports = route