const express=require('express')
const app=express()
const api = require('./server/route/api')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/WeatherDB",{useNewUrlParser:true})//here we define the our Data connection (here is in our localhost)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  next()
})

app.use('/', api)

app.listen(4040, function() {
  console.log(`Running on port 4040`);
}); 


