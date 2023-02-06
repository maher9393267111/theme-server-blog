const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('./src/config')
const routes = require('./src/routes')
const { errorHandler } = require('./src/middlewares')
const proxy = require('express-http-proxy')


const app = express()

app.use('/api', proxy('http://localhost:5173'))
app.use(cors())
app.use(express.json({ limit: '8000kb' }))

app.use('/v1', routes)

app.use(errorHandler)

app.get('/', async (req, res) => {
  try {
    res.send({ app: 'twitter-newsletter-svc', status: 'OK' });
  } catch (err) {
    res.status(400).send(err);
  }
});




mongoose.connect("mongodb+srv://maher:maher9326@cluster0.nf63j.mongodb.net/blog-app-mern?retryWrites=true&w=majority")
  .then(() => {

    app.listen(config.port, () => {
      console.log(`connected to DB and listening on port ${config.port}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })