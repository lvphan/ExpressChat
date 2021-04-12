const sendButton = document.getElementById('messageButton');

const socket = io();

sendButton.addEventListener('mousedown', () => {
  const inputText = document.getElementById('messageText').value;

  socket.emit('message', inputText);

  document.getElementById('messageText').value = '';
});

socket.on('message', (message) => {
  const newMessage = document.createElement('p');
  newMessage.textContent = message;

  const messageArea = document.getElementsByClassName('allMessages')[0];
  
  messageArea.appendChild(newMessage);

});