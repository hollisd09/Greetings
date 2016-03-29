'use strict'

const express = require('express'),
      passport = require('passport'),
      router = express.Router(),

      User = require('./model')

require('./local')

// LOGIN
router.get('/main', (req, res) => {
  res.render('/main')
})

