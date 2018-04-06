var express = require('express');

var router = express.Router();
 
var employee = require('../models/employee').employee;
var department = require('../models/employee').department;


router.post('/employee', (req, res) => {

    var data = req.body;
    var newemp1 = employee({
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        country: data.country,
        phone: data.phone,
        department: data.department
    });
    newemp1.save(function(err, data) {
        // if (err) throw err;
        if (err) {
            // console.log('ERROR : ' + JSON.stringify(err));
            console.log('ERROR : ' + JSON.stringify(err.errors.firstName.message));
            employee.find({}, function(err1, newempd) {
                res.render(__dirname + '/../index2.ejs', { empData: JSON.stringify(newempd), errData: err.errors });
            });
           
        } else {
            console.log('Success  : ' + JSON.stringify(data));
            var errData1 = {};
            employee.find({}, function(err1, newempd) {
                res.render(__dirname + '/../index2.ejs', { empData: JSON.stringify(newempd), errData: errData1 });
            });
           
           // console.log('User saved successfully!');
            //res.send({ message: 'Employee Created !' })
           // res.redirect('http://localhost:3000/'); 
        }

    });

})


router.get('/edit/:id', function(req, res) {

    employee.find({ _id: req.params.id }, function(err, docs) {
        res.render(__dirname + '/../edit.ejs', { posts: docs[0] });
    });
});
router.post('/update/:id', function(req, res) {
    var data = req.body;
    console.log("Edit : ");
    console.log(data);
    employee.findByIdAndUpdate(data._id, {
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        country: data.country,
        phone: data.phone,
        department: data.department
    }, function(err, user) {
        if (err) throw err;
        console.log(" User updated successfully!! ");
        res.redirect('http://localhost:3000/');
    });
});

router.get('/delete/:id', function(req, res) {

    employee.findByIdAndRemove(req.params.id, function(err) {
        if (err) throw err;
        console.log('User deleted!');
        res.redirect('http://localhost:3000/');
    });
});

router.get('/', function(req, res) {

    employee.find({}, function(err, newempd) {
        if (err) throw err;
        var errData1 = {};
        res.render(__dirname + '/../index2.ejs', { empData: JSON.stringify(newempd), errData: errData1 });
    });
    // res.sendFile(__dirname + '/index2.html');
});


module.exports = router;