
const User = require('../models/Userlogin')
const response  = require('express')
const Userlogin = require('../models/Userlogin')

const index = (req,res, next) => {
    res.render('Home');
}

// show user 
const show = (req,res, next) => {
    User.find()
    .then(response =>{res.json({response})})
    .catch(error => {res.json({
        message: 'error'
    })})
}

// add user 
const addUser = (req, res, next) => {
    let user = new User({
        username: req.body.username,
        password: req.body.password
    })
    user.save()
    .then(response=>{
        res.json({
            message: 'OK'
        })
    })
    .catch(error=>{
        res.json({
            message:'error add User'
        })
    })
}

//update an User
const updateUser = (req, res, next) => {
    let UserId = req.body.UserId
    let updateData = {
        username: req.body.username,
        password: req.body.password
    }
    User.findByIdAndUpdate(UserId,{$set: updateData})
    .then(response => {
        res.json({
            message: 'Employee update successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

// delete an User
const deleteUser = (req, res, next) => {
    let UserId = req.body.UserId
    User.findByIdAndRemove(UserId)
    .then(response => {
        res.json({
            message: 'deleted successfully'
        })
    })
    .catch(error => {
        req.json({
            message: 'An error Occured!'
        })
    })
}

module.exports = {
    index, show, addUser, updateUser, deleteUser
}
