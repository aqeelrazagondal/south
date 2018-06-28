var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();

app.use(serveStatic(__dirname));
app.use(serveStatic(path.join(__dirname, 'public')));
app.use('/', function (res, res){
    res.render('index.html');
});

app.listen(3000, function() {
    console.log('Server is running on Port 3000');
});

// var connect = require('connect');
// var serveStatic = require('serve-static');
//
// var express = require('express');
// var app = express();
//
// connect().use(serveStatic(__dirname)).listen(8080, function(){
//     console.log('Server running on 8080...');
// });