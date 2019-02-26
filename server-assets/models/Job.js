let mongoose = require('mongoose')
let Schema = mongoose.Schema

let job = new Schema({
  title: { type: String, required: true },
  rate: { type: Number, required: true },
  company: { type: String, required: true },
  imgUrl: { type: String }
})

module.exports = mongoose.model('Job', job)