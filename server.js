var express = require('express');
var app = express();
require('dotenv').config()
const port = process.env.PORT;
//set view engine
//app.set("view engine","jade")
app.set('view engine', 'pug')

// app.get('/', function (req, res) {

//     res.render('jade');

// });
app.get('/', function (req, res) {
  res.render(__dirname + '/views/pug', { title: 'Hey', message: 'Hello there!' })
})

var server = app.listen(port, function () {
    console.log('Node server is running..'+port);
});
