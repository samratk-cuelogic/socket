var http = require('http');
var url = require("url");
var querystring = require('querystring'); 
 

 var fs = require("fs");
 var Promise = require("bluebird");
 require('dotenv').config()
//var dotenv =
//******************globby*****************
// const {gitignore} = require('globby');
 
// (async () => {
//     const isIgnored = await gitignore();
//     console.log(isIgnored('some/file'));
// })();
// const globby = require('globby');
 
// (async () => {
//     const paths = await globby(['*', '!app.js']);
 
//   //  console.log(paths);
   
// })();
//************************************

var dir = './testdir';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}else{
    //   fs.writeFile(dir+'/test4.txt', 'fileContent', (err) => {
    //     if (err) throw err; 
    //     console.log("The file was succesfully saved!");
    // }); 
}

fs.readdir(dir, (err, files) => {
  files.forEach(file => {
    
    console.log(file);
  });
})



var readFile = Promise.promisify(require("fs").readFile);

readFile("test.js", "utf8").then(function(contents) {
    return eval(contents);
}).then(function(result) {
    console.log("The result of evaluating test.js", result);
}).catch(SyntaxError, function(e) {
    console.log("File had syntax error", e);
//Catch any other error
}).catch(function(e) {
    console.log("Error reading file", e);
});


const EventEmitter = require('events');

class WithLog extends EventEmitter {
  execute(taskFunc) {
    console.log('Before executing');
    this.emit('begin');
    taskFunc();
    this.emit('end');
    console.log('After executing');
  }
}

const withLog = new WithLog();

withLog.on('begin', () => console.log('About to execute'));
withLog.on('end', () => console.log('Done with execute'));

withLog.execute(() => console.log('*** Executing task ***'));

//console.log(JSON.stringify(argvv));

// if (argvv) {
//   console.log('a seems bigger than b');
// } else {
//   console.log('a is not bigger than b');
// }

//********* yargs ***********
// const argvv = require('yargs').argv;

// for (let j = 0; j < argvv.length; j++) {  
//   // console.log(j + ' -> ' + (JSON.stringify(argvv[_])));
//     console.log(j + ' -> ' + (JSON.stringify(argvv.a)));
// }
// for (let j = 0; j < process.argv.length; j++) {  
//  //   console.log(j + ' -> ' + (process.argv[j]));
// }
//********* yargs ***********


const port = process.env.PORT ;
//dotenv.load();
console.log('config' +port);

var moment = require('moment');
var mom=moment().format('Y-MMM-DD');
console.log(mom);


var Boom = require("boom");
//var express = require('express');

//require('dotenv').config()
 
//var testexports = require("./public/testexport.js");
//var app = express();



http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
  var cc=Boom.unauthorized('invalid password', 'sample');// Boom.unauthorized('invalid password');//Boom.badRequest('invalid query');
  // response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n'+cc);
}).listen(port);
