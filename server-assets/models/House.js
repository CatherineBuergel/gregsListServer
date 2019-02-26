let mongoose = require('mongoose')
let Schema = mongoose.Schema

let house = new Schema({
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  year: { type: Number },
  price: { type: Number },
  description: { type: String }
})

module.exports = mongoose.model('House', house)