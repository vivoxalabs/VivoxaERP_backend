const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var paymentLogSchema = new Schema({
    id : {type:String,trim:true},
    balance : {type:Number},
    log : {
        timestamp : {type:Date},
        amount : {type:Number},
        type : {type:String,trim:true}
    }
})

mongoose.model('PaymentLog', paymentLogSchema);