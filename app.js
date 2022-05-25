let express = require('express');
let socket  = require('socket.io');
let app     = express();



let server = app.listen(8080, ()=>{
	console.log('Chatting app is running on localhost:8080');
})


app.get('/', (req,res)=>{
	res.sendFile(__dirname+'/public/index.html');
})

let io = socket(server);

io.on('connection', (socket)=>{
  socket.on('chat', (data)=>{
    io.sockets.emit('chat', data);
  })
})
