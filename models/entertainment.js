const mongoose = require("mongoose")
const entertainmentSchema = mongoose.Schema({
Movies: String,
Genre: String,
Budget: Number
})
module.exports = mongoose.model("entertainment",
entertainmentSchema)