const { log } = require('console');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render( 'index.ejs');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('message',(message)=>{
    console.log("new message",message)
    io.emit('mag',message)
  })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});