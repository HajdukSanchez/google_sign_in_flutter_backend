const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config() // Gave us the possibility to use the .env file

const app = express() // Create express app

// Parser
app.use(bodyParser.urlencoded({ extended: true })) // Allow us to parser data from the body in PUT, POST, PATCH & DELETE

// Routes
app.use('/', require('./routes/auth'))

app.listen(process.env.PORT || 3000, () => {
  const port = process.env.PORT || 3000
  console.log(`Server running on port ${port}`)
})
