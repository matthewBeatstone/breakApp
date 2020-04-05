var express = require('express');
var socket = require('socket.io');
var uniqid = require('uniqid');
var cors = require('cors');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const client = require('twilio')(
  'AC96b0cd6db9413443fdc56b4bc20796ac',
  'aeef66ace486ac253b921656f8d01a36'
);
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
app.use(cors())
app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json',"Access-Control-Allow-Origin", "*");
  client.messages
    .create({
      from: +18084009208,
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
