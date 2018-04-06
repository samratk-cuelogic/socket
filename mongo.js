//var http = require('http');
var url = require("url");
var querystring = require('querystring');
var fs = require("fs");
require('dotenv').config()
const port = process.env.PORT;

console.log('Server running on port : ' + port);
var path = require('path');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
//mongoose.connect('mongodb://localhost/dbstudent');

mongoose.connect('mongodb://localhost:27017/dbemployee', function(err) {
    if (err) throw err;
    console.log('Successfully connected to monogo db');
});

var app = require('express')();
var http = require('http').Server(app);

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

var htmlparser = require("htmlparser2");

var ejs = require('ejs');
app.set('view engine', 'ejs');
app.set("view options", { layout: false });
// app.use(express.bodyParser());


var moment = require('moment');
var mom = moment().format('Y-MMM-DD');
console.log(mom);
var Boom = require("boom");


//======== Load model ==========
// var employee = require('./models/employee').employee;
// var department = require('./models/employee').department;


 
//console.log(employee);

//========= With express ============

// const bodyParser= require('body-parser')  
// app.use(bodyParser.urlencoded({extended: true}))
app.use(require("./routes/index"));

//============= Socket ======================
//var io = require('socket.io')(http);

// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//      socket.broadcast.emit('newuser','New user connected!'+io.engine.clientsCount);
//   });

//    socket.on('join', function(data) {
//         console.log(data);
//         socket.broadcast.emit('newuser','New user connected!'+io.engine.clientsCount);
//     });

//     socket.on('messages', function(data) {
//            socket.emit('broad', data);
//            socket.broadcast.emit('broad',data);
//     });

// });


http.listen(port, function() {
    console.log('listening on *:' + port);
});



//************************************ 



// var createUser = new mongoose.Schema({ 
//   username: { type: String, default: 'root' },
//   password : { type: String, default: 'pass' }
// });

// var userList = mongoose.model("userList",createUser);

// var newemp =  employee({
//     firstName: "Pradeep",
//     lastName : "Patra",
//     address  : "Pune",
//     country  : "India",
//     phone    : "8055555555",
//     department  : "IT" 
// });

// ******* Add user ******
// newemp.save(function(err,data) {
//  // if (err) throw err;
//   if (err) {
//      console.log('ERROR : '+ JSON.stringify(err));
//   }
//    console.log('Success  : '+ JSON.stringify(data));
//   console.log('User saved successfully!');
// });

// *******List User ******


// *******List User ******
// employee.find({firstName:"Praksh"}, function(err, newempd) {
//   if (err) throw err;
//    console.log('Success  : '+ JSON.stringify(newempd));
//   // object of all the users
//   console.log(newempd);
// });

// employee.findById('5ac4a6f83e729848977425b3', function(err, user) {
//   if (err) throw err;

//   // show the one user
//     console.log(' Find By ID Success  : '+ JSON.stringify(user));

//       user.firstName="Nilesh";
//       user.save(function(err) {
//         if (err) throw err;

//          console.log('User successfully updated!');
//       });

// });

// employee.findOneAndUpdate({ firstName: "Nilesh" }, {  firstName: "Nilesh1" }, function(err, user) {
//   if (err) throw err;

//   // we have the updated user returned to us
//    console.log('findOneAndUpdate :!');
//     //console.log(user);
// });

// employee.findByIdAndUpdate('5ac4a6f83e729848977425b3', { username: 'starlord88' }, function(err, user) {
//   if (err) throw err;

//   // we have the updated user returned to us
//   console.log(user);
// });

// employee.find({ firstName: "Nilesh" }, function(err, user) {
//   if (err) throw err;

//   // delete him
//   user.remove(function(err) {
//     if (err) throw err;

//     console.log('User successfully deleted!');
//   });
// });

// employee.findOneAndRemove({ firstName: "Nilesh" }, function(err) {
//   if (err) throw err;

//   // we have deleted the user
//   console.log('User deleted!');
// });

// employee.findByIdAndRemove(4, function(err) {
//   if (err) throw err;

//   // we have deleted the user
//   console.log('User deleted!');
// });
///====== Department ========
// var newdept =  department({
//     name: "HR",
//     deptno : "20" 
// });

// newdept.save(function(err,data) {
//  // if (err) throw err;
//   if (err) {
//      console.log('ERROR : '+ JSON.stringify(err));
//   }
//    console.log('Success  : '+ JSON.stringify(data));
//   console.log('Department Created successfully!');
// });