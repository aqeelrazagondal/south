var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();

app.use(serveStatic(__dirname));
app.use(serveStatic(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function() {
    console.log('App IS RUNNING ON PORT 3000');
});


// const express = require('express');
// const http = require('http')
// const path = require('path');

// const app = express();

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

// const port = process.env.PORT || 3000;
// app.set('port', port);

// const server = http.createServer(app);
// server.listen(port, () => console.log('Server Running at Port '+ port));
// var connect = require('connect');
// var serveStatic = require('serve-static');
//
// var express = require('express');
// var app = express();
//
// connect().use(serveStatic(__dirname)).listen(8080, function(){
//     console.log('Server running on 8080...');
// });