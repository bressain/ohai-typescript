const bodyParser = require('body-parser')
const express = require('express')
const router = require('./router')

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(bodyParser.json())

app.use('/', router)

module.exports = app
