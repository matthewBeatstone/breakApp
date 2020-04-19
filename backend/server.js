var express = require('express');
var socket = require('socket.io');
var uniqid = require('uniqid');
var cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const pino = require('express-pino-logger')();
const client = require('twilio')(process.env.SID, process.env.TOKEN);

var app = express();

app.use(cors())
server = app.listen(8080, function(){
    console.log('server is running...')
});

io = socket(server);

const whitelist = [
	{address: '192.168.0.10', table: 1}
]



io.on('connection', (socket) => {
    console.log(socket.handshake.address)
    console.log(socket.id);
    var socket_address = socket.handshake.address.substring(7, socket.handshake.address.length)  
    var table = null
    for(var i = 0; i<whitelist.length; i++){
	obj = whitelist[i]
    	if(obj.address.localeCompare(socket_address) === 0){
		table = obj.table
	}
    }

    socket.on('orders', function(data){
        io.emit('order', {id: uniqid(), table: table, order:data});
    })
    
});
app.use(pino);

app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json',"Access-Control-Allow-Origin", "*");
  client.messages
    .create({
      from: process.env.TEL,
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});
