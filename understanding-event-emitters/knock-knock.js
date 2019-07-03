const EventEmitter = require('events');

class Emitter extends EventEmitter { }

const emitter = new Emitter();

emitter.once('knock', function() {
  console.log('Who\'s there?');
});

emitter.on('knock', function() {
  console.log('Go away!');
});

emitter.emit('knock');
emitter.emit('knock');

emitter.removeAllListeners();

emitter.emit('knock');
