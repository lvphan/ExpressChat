const express = require('express');
const socket = require('socket.io');
const path = require('path');

const app = express();

const server = app.listen(8080, () => {
  console.log("Server created");
});

app.use(express.static(path.join(__dirname, 'public')
));

const io = socket(server);

io.on('connection', (socket) => {
  socket.on('message', (message) => {
    io.sockets.emit('message', message);
  });
});