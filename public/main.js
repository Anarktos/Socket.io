const socket = io();

const chatForm = document.getElementById('chatForm');
const chat = document.getElementById('chat');
const messages = document.getElementById('messages');

chatForm.addEventListener('submit', e => {
  e.preventDefault();

  if(!chat.value) return;

  if (chat.value) {
    socket.emit('chat', chat.value);
    chat.value = '';
  }

  socket.on('chat:server', msg => {
    console.log(msg);
    const item = document.createElement('li');
    item.innerText = msg;
    messages.appendChild(item);
    window.scrollTo(0,document.body.scrollHeight);
  })

})