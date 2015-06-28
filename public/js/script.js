var socket = io.connect('http://189.134.22.184');

socket.on('connected', function(){
	$('#dialogo').html("Conexión en tiempor real con tarjeta");
	$('#dialogo').css({
		"color" : "#00FF00"
	});
});

socket.on('disconnect', function(){
	$('#dialogo').html("Desconectado de la tarjeta");
	$('#dialogo').css({
		"color" : "#FF0000"
	});
});


socket.on('data', function (data) {
	var res = data.split("/");

	$('#dialogo').html("Conexión en tiempor real con tarjeta");
	$('#dialogo').css({
		"color" : "#00FF00"
	});
	

	$('#humedad').find('h2').html('Voltaje: ' + res[0]);
	$('#ntc').find('h2').html('Voltaje: ' + res[1]);
	$('#luz').find('h2').html('Voltaje: ' + res[2]);

	$('#humedad').find('div').css({
		"height": res[0] * 200 + "px",
		"margin-top": "-" + (res[0] * 200 + 5) + "px",
	});

	$('#ntc').find('div').css({
		"height": res[1] * 200 + "px",
		"margin-top": "-" + (res[1] * 200 + 5) + "px",
	});

	$('#luz').find('div').css({
		"height": res[2] * 200 + "px",
		"margin-top": "-" + (res[2] * 200 + 5) + "px",
	});


	$('#humedad').find('h3').html('formula: voltaje * 100 = ' + res[0] * 100 + 'V.');
	$('#ntc').find('h3').html('formula: voltaje * 100 = ' + res[1] * 100 + 'V.');
	$('#luz').find('h3').html('formula: voltaje * 100 = ' + res[2] * 100 + 'V.');
});