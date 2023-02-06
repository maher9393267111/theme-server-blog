require('dotenv').config()


const config = {
  port: process.env.PORT || 5000,
  db: process.env.DB,
  secret: '121245555',
  email: {
    smtp: process.env.EMAIL_SMTP,
    from: process.env.EMAIL_FROM,
  },
  cloudinary: {
    apiKey: "442715196852148",
    secret: "zFL1FnOG0PD64fdyyVa-8g5cs1s",
    name: "maher9911133"
  }
}


module.exports = config