const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    name: String,
    tempratue: Number,
    condition: String,
    conditionPic: String
})

const City = mongoose.model("city", transactionSchema)

module.exports = City


