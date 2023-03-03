const { asyncHandler } = require('../utils')
const { userService, authService } = require('../services')
const validate = require('../validations/validate')
const  {sendEmail} =  require('../services/sendEmail')


const register = asyncHandler( async (req, res) => {
  console.log('register' ,req.body)
  validate.register(req.body)
  sendEmail(req.body.email  , req.body.subject, req.body.text)
  const user = await userService.createUser(req.body)
  const token = await authService.generateToken(user._id)
  const response = { user, token }
  res.status(200).json(response)
})

const login = asyncHandler( async (req, res) => {
  validate.login(req.body)
  const user = await authService.login(req.body.email, req.body.password)
  const token = await authService.generateToken(user._id)
  const response = { user, token }
  res.status(200).json(response)
})


// forgotPassword


// resetPassword



// send MEssage

const SENDMESSAGE = asyncHandler( async (req, res) => {
  console.log('register' ,req.body)
  sendEmail(req.body.email  , req.body.subject, req.body.text)

  res.status(200).json('message Sended')
})



module.exports = {
  register,
  login,
  SENDMESSAGE 
}