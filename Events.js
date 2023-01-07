const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name) => {
  console.log(`data received ${name}`);
})

customEmitter.emit('response', 'Lucas')