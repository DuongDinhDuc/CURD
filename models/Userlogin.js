const mongoose = require('mongoose');

const UserloginSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require:true
    }

},{timestamps:true});
const Userlogin = mongoose.model('Userlogin',UserloginSchema);

module.exports = Userlogin;