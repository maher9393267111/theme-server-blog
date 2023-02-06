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

const whitelist = [
  '*'
];

app.use((req, res, next) => {
  const origin = req.get('referer');
  const isWhitelisted = whitelist.find((w) => origin && origin.includes(w));
  if (isWhitelisted) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
  }
  // Pass to next layer of middleware
  if (req.method === 'OPTIONS') res.sendStatus(200);
  else next();
});

const setContext = (req, res, next) => {
  if (!req.context) req.context = {};
  next();
};
app.use(setContext);








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