var http = require('http');
var express = require('express');
var app = express();
var com = require("serialport");
var server = http.createServer(app).listen(3000);
var io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/public'));

var serialport = new com.SerialPort("COM3", {
	baudrate: 9600,
    parser: com.parsers.readline('\r\n')
});

serialport.on('open', function(){
	//console.log('EL PUERTO SERIE ESTÁ ABIERTO');
	io.sockets.on('connection', function (socket) {
		//console.log('SOCKET CONECCTADO');
		socket.emit('connected');
		serialport.on('data', function(data){
				socket.emit('data', data);
		});
	});
});
