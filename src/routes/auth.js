const express = require('express')
const { authController } = require('../controllers')


const router = express.Router()

router
  .post('/register', authController.register)
  .post('/login', authController.login)
  .post('/sendmsg', authController.SENDMESSAGE )


module.exports = router