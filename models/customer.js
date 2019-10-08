const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nameSchema = new Schema({
  fName : {type:String,trim:true},
  mName : {type:String,trim:true},
  lName : {type:String,trim:true},
  initName : {type:String,trim:true}
});

const addressSchema = new Schema({
  homeNumber : {type:Number},
  street1 : {type:String,trim:true},
  street2 : {type:String,trim:true},
  city : {type:String,trim:true},
  zip : {type:String,trim:true}
});

const contactSchema = new Schema({
  cType : {type:String,trim:true},
  value : {type:Number}
});

const vehicleClassSchema = new Schema({
  vType : {type:String,trim:true},
  description : {type:String,trim:true}
});

const amountSchema = new Schema({
  total : {type:Number},
  balance : {type:Number},
  timestamps : {type:Date}
});

const examStatusSchema = new Schema({
  eType : {type:String,trim:true},
  state : {type:String,trim:true}
});

const licenseSchema = new Schema({
  cardNumber : {type:String,trim:true},
  vehicleCategory : {type:String,trim:true},
  issuedDate : {type:Date},
  exipireDate : {type:Date}
});

const customerSchema = new Schema({
  nic: {type: String,required: true},
  name: [nameSchema],
  address: [addressSchema],
  contact: [contactSchema],
  dob: {type: Date},
  gender : {type: String,trim: true},
  trainingType : {type: String,trim: true},
  vehicleType : {type: String,trim: true},
  vehicleClass: [vehicleClassSchema],
  amount: amountSchema,
  examStatus: [examStatusSchema],
  license: licenseSchema,
  custImage : {type: String}
});

module.exports = mongoose.model('Customer', customerSchema);

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
