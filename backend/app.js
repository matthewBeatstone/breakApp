var express = require('express');
var socket = require('socket.io');

var app = express();


server = app.listen(8080, function(){
    console.log('server is running...')
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('take_order', function(data){
        io.emit('order', data);
    })
});
