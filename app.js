var http = require('http');
var url = require("url");
var querystring = require('querystring');
var fs = require("fs");
require('dotenv').config()
const port = process.env.PORT;

console.log('Server running on port : ' + port);
 
//========= With express ============
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var clientCount=function(socket){
    socket.broadcast.emit('newuser', 'No users connected! : ' + io.engine.clientsCount);
};

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
        clientCount(socket);
    });

    socket.on('join', function(data) {
        console.log(data);
        clientCount(socket); 
    });

    socket.on('messages', function(data) {
        socket.emit('broad', data);
        socket.broadcast.emit('broad', data);
    });

});

 

http.listen(port, function() {
    console.log('listening on *:' + port);
});
