const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.get('/show', UserController.show)
router.post('/add', UserController.addUser)
router.put('/update', UserController.updateUser)
router.put('/delete', UserController.deleteUser)

module.exports = router