//archivo index.js
var express = require('express');
var fs = require('fs');
var https = require('https');

var app = express();

const PORT = 9000;

app.listen(PORT, function(){
	console.log('Server running on port ' + PORT);
});

app.get('/', function(req, res){
	console.log('Se recibio una petición get');
	res.send('Hola, estas en la pagina inicial');
});

// Configuracion HTTPS
// https.createServer({
//   cert: fs.readFileSync(__dirname + '/msi.crt'),
//   key: fs.readFileSync(__dirname + '/msi.key')
// }, app).listen(PORT, function () {
//   console.log('Server running on port ' + PORT);
// });

// app.get('/', function (req, res) {
//   res.send('Hola, estas en la pagina inicial');
//   console.log('Se recibio una petición get a través de https');
// });