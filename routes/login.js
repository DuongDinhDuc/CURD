const express = require('express')
const router  = express.Router()

const login = require('../controllers/LoginController')

router.get('/',login.login)
router.get('/register',login.register)
router.get('/logout',login.logout)
router.get('/changepass',login.changepass)

module.exports= router