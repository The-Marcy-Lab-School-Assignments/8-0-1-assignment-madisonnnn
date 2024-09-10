const express = require('express')
const app = express()
const path = require('path')
const pathToDistFolder = path.join(__dirname, '../frontend/vite-project/dist')

//middleware
const logRoutes = (req, res, next) => {
 const time = (new Date()).toLocaleString()
 console.log(`${req.method}: ${req.originalUrl} - ${time}`)
 next()
}

const serveStatic = express.static(pathToDistFolder)

// controllers
const serveDrills = (req, res, next) => {
 res.send('<h1>drills</h1>');
}
const serveForest = (req, res, next) => {
 res.send('<h1>I am a tree</h1>')
}
const serveHello = (req, res, next) => {
 const first = req.query.first
 const last = req.query.last
 if (first && !last) {
   return res.send(`hello ${first} ${last}!`)
 }
 res.send('hello')
}
const serveData = (req, res, next) => {
 const data = [{ name: 'burrito' }, { name: 'slime' }, { name: 'squid' }]
 res.send(data)
}

// endpoints
app.use(logRoutes)
app.use(serveStatic)

app.get('/', serveDrills)
app.get('/forest', serveForest)
app.get('/api/hello', serveHello)
app.get('/api/data', serveData)

const port = 8080
app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`)
})