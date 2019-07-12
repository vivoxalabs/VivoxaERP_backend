const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    id : {type:String,trim:true},
    username :{type:String,trim:true},
    userType : {type:String,trim:true},
    password : {type:String,trim:true},
    level : {type:String,trim:true}
})

mongoose.model('User', userSchema);