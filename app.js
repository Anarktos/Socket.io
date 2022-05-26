const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('chat', msg => {
    io.emit('chat:server', msg);
  })
})

app.use(express.static(`${__dirname}/public`));


app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
})

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

