
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema ({
    color: {
        type: String
    },
    make: {
        type: String
    },
    model: {
        type: String,
    }
 }, {
    timestamps: true
})

module.exports = mongoose.model("Car", carSchema)