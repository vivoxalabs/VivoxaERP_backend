const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

/* Receive all customer data */
router.get('/', (req, res) => {
    Customer.find()
    .then(customers => {
        res.json({
            confirmation : 'success',
            data: customers
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
});


router.post('/', (req,res) => {
    const customer = new Customer({
        nic: req.body.nic,
        name: {
            fName : req.body.name.fName,
            mName : req.body.name.mName,
            lName : req.body.name.lName,
            initName : req.body.name.initName
        }
    });

    customer.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err})
        });
});

/*
///////// Create Customer 
router.post('/', (req,res) => {
    const customer = new Customer({
        nic: req.body.nic,
        name: {
            fName : req.body.fName,
            mName : req.body.mName,
            lName : req.body.lName,
            initName : req.body.initName
        },
        address : {
            homeNumber : req.body.homeNumber,
            street1 : req.body.street1,
            street2 : req.body.fnstreet2ame,
            city : req.body.city,
            zip : req.body.zip
        },
        contact : {
            type : req.body.contactType,
            value : req.body.contactValue
        },
        dob : req.body.date,
        gender : req.body.gender,
        trainingType : req.body.trainingType,
        vehicleType : req.body.vehicleType,
        vehicleClass : {
            type : req.body.vehicleClassType,
            description : req.body.vehicleClassDescription
        },
        amount : {
            total : req.body.total,
            balance : req.body.balance,
            timestamps : req.body.timestamps
        },
        examStatus : {
            type : req.body.examStatusType,
            state : req.body.examStatusState
        },
        license : {
            cardNumber : req.body.cardNumber,
            vehicleCategory : req.body.vehicleCategory,
            issuedDate : req.body.issuedDate,
            exipireDate : req.body.exipireDate
        },
        custImage : req.body.custImage
    });

    customer.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err });
    })
});
*/
module.exports = router;