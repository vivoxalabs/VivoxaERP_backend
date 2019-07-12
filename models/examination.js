const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var examinationSchema = new Schema({
    id : {type:String,trim:true},
    customerId : {type:String,trim:true},
    writtenExam : {
        examDate : {type:Date},
        attempt : {
            attemptNo : {type:Number},
            date : {type:Date},
            results : {type:String},
            remarks : {type:String}
        }
    },
    trial : {
        examDate : {type:Date},
        attempt : {
            attemptNo : {type:Number},
            date : {type:Date},
            results : {type:String},
            remarks : {type:String}
        } 
    }
})

mongoose.model('Examination', examinationSchema);