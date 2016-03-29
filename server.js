'use strict'

const bodyParser = require('body-parser'),
      express = require('express'),
      methodOverride = require('method-override'),
      mongoose = require('mongoose'),
      session = require('express-session'),
      RedisStore = require('connect-redis')(session),

      userRoutes = require('./lib/user/routes'),

      app = express(),
      PORT = process.env.PORT || 3000,
      SESSION_SECRET = process.env.SESSION_SECRET || 'secret'

app.set('view engine')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(methodOverride('_method'))
app.use(session({
  secret: SESSION_SECRET,
  store: new RedisStore(),
  resave: true,
  saveUninitialized: true
}))

app.use(userRoutes)

app.locals.title = ''

app.use((req, res, next) => {
  res.locals.user = req.user
  next()
})

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

const mongoURL = 'mongodb://localhost:27017/greetings'

mongoose.connect(mongoURL)

app.listen(PORT, () => {
  console.log("Server listening on PORT:", PORT);
})

module.exports = app
