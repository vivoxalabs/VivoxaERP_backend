const mongoose = require('mongoose');
 
const nameObj = mongoose.Schema.Types.ObjectId;
const addObj = mongoose.Schema.Types.ObjectId;
const contactObj = mongoose.Schema.Types.ObjectId;
const vehClassObj = mongoose.Schema.Types.ObjectId;
const amountObj = mongoose.Schema.Types.ObjectId;
const exStatObj = mongoose.Schema.Types.ObjectId;
const licenseObj = mongoose.Schema.Types.ObjectId;

const customerSchema = mongoose.Schema({
  nic: {type: Number,required: true},
  name: {type: nameObj},
  address: {type: {addObj}},
  contact: {type: {contactObj}},
  dob: {type: Date},
  gender : {type: String,trim: true},
  trainingType : {type: String,trim: true},
  vehicleType : {type: String,trim: true},
  vehicleClass: {type: {vehClassObj}},
  amount: {type: {amountObj}},
  examStatus: {type: {exStatObj}},
  license: {type: {licenseObj}}
})


mongoose.model('Customer', customerSchema);

/*
var customerSchema = new Schema({
  nic:{type:Number},
  name : {
    fName : {type:String,trim:true},
    mName : {type:String,trim:true},
    lName : {type:String,trim:true},
    initName : {type:String,trim:true}
  },
  address : {
    homeNumber : {type:Number},
    street1 : {type:String,trim:true},
    street2 : {type:String,trim:true},
    city : {type:String,trim:true},
    zip : {type:String,trim:true}
  },
  contact : {
    type : {type:String,trim:true},
    value : {type:Number}
  },
  dob : {type:Date},
  gender : {type:String,trim:true},
  trainingType : {type:String,trim:true},
  vehicleType : {type:String,trim:true},
  vehicleClass : {
    type : {type:String,trim:true},
    description : {type:String,trim:true}
  },
  amount : {
    total : {type:Number},
    balance : {type:Number},
    timestamps : {type:Date}
  },
  examStatus : {
    type : {type:String,trim:true},
    state : {type:String,trim:true}
  },
  license : {
    cardNumber : {type:String,trim:true},
    vehicleCategory : {type:String,trim:true},
    issuedDate : {type:Date},
    exipireDate : {type:Date}
  },
  custImage : {data:Buffer,contentType:String}
});
*/
