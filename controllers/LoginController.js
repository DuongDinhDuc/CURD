const { response, request } = require('express');

const login = (req, res, next) => {
    res.render('index')
}

const register = (req, res, next) => {
    res.render('register')
}

const logout = (req, res, next) => {
    res.render('index')
}

const changepassword = (req, res, next) => {
    res.render('changepassword')
}

module.require = {
    login, logout, register, changepassword
}
