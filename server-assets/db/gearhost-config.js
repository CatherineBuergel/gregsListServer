let mongoose = require('mongoose')

const connectionString = 'mongodb://catherinegreg:Xr4cIBU_0iv_@den1.mongo1.gear.host:27001/catherinegreg'

let connection = mongoose.connection;

mongoose.connect(connectionString, {
  useNewUrlParser: true
})

connection.on('error', err => {
  console.log('database error:', err)
})

connection.once('open', () => {
  console.log('succesfully connected to database')
})