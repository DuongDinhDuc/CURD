const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { response, request } = require('express')
const Userlogin = require('../models/Userlogin')

const login =(req,res,next) =>{
    var username = req.body.username
    var password = req.body.password
    
    Userlogin.findOne({username:username})
    .then(userlogin =>{
        if(userlogin){
            bcrypt.compare(password,userlogin.password,function(err,result){
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result) {
                    Userlogin.find({}, function(err,data){
                        if(err) throw err;
                        res.render('listUser',{username: data})
                    })
                }

                else{
                    res.json({
                    message:'Incorrect Password'
                    })
                }
                    })
                }
        else{
            res.json({
            message:'no user found'
            })
        }
    })
}

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hasheedPass){
        if(err) {
            res.json({
                error: err
            })
        }
        let userlogin = new Userlogin({
            username: req.body.username,
            password: hasheedPass
        })
        userlogin.save()
        .then(userlogin => {
            res.json({
                message: 'User ctreate, you can login'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
    })
}

const changepassword = (req,res, next) => {
    var username = req.body.username
    var password = req.body.password
    var newpassword = req.body.newpassword
    let updateData = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.newpassword,10)
    }
    Userlogin.findOne({username:username})
    .then(userlogin =>{
        if(userlogin){
            bcrypt.compare(password,userlogin.password,function(err,result){
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    Userlogin.update({$set: updateData}).then
                    (res.json({
                        message:'Password reset done'
                        }))
                }
                else{
                    res.json({
                    message:'Password does not matched!'
                    })
                }
                    })
                }
        else{
            res.json({
            message:'no user found'
            })
        }
    })
}






module.exports = {
    register , login, changepassword
}



