let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000

require('./server-assets/db/gearhost-config')

server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))


let carRoutes = require('./server-assets/routes/car-route')

server.use('/api/cars', carRoutes)

server.use('*', (req, res, next) => {
  res.status(404).send('No matching routes')
})

server.listen(port, () => {
  console.log('server is running on port:' + port)
})
