var express = require('express');
var socket = require('socket.io');
var uniqid = require('uniqid');
var cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const client = require('twilio')(process.env.SID, process.env.TOKEN);

var app = express();

server = app.listen(8080, function(){
    console.log('server is running...')
});

io = socket(server);

const whitelist = [
	{address: '192.168.0.10', table: 1}
]

app.use(cors())
io.on('connection', (socket) => {
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

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  console.log(req.body)
  client.messages
    .create({
      from: process.env.TEL,
      to: req.body.phoneNumber,
      body: req.body.smsBody
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

const fs = require('fs');

let rawdata = fs.readFileSync('catalog.json');
let catalog = JSON.parse(rawdata);
console.log(catalog);


function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
}

catalog.categories.map(cat => {
	var image = cat.pic
	cat.pic = base64_encode(image)
	cat.items.map(item => {
		var item_pic = item.pic
		item.pic = base64_encode(item_pic)
	})
})

console.log(catalog)

app.get('/api/catalog', (req, res) => {
	res.json(catalog)
})
