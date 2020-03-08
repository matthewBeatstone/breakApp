var express = require('express');
var socket = require('socket.io');
var uniqid = require('uniqid');

var app = express();


server = app.listen(8080, function(){
    console.log('server is running...')
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('table1', function(data){
        io.emit('order_table1', {id: uniqid(), table:1, order:data});
    })
    socket.on('table2', function(data){
        io.emit('order_table2', {id: uniqid(), table:2, order:data});
    })

});
