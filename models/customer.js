const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var customerSchema = new Schema({
  admissionId: String,
  custName : String,
  address : String,
  tel1 : String,
  dob : Date,
  custInitialName : String,
  nic : String,
  tel2 : String,
  tel3 : String,
  gender : String,
  lessonType : Number,
  custFullName : String,
  imageId : Buffer
});

mongoose.model('Customer', customerSchema);