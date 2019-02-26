let mongoose = require('mongoose')
let Schema = mongoose.Schema


let car = new Schema({
  make: { type: String, required: true, minlength: 2 },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  imgUrl: { type: String }
})

module.exports = mongoose.model('Car', car)