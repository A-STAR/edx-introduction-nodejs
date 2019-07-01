const EventEmitter = require('events');

class Job extends EventEmitter { }

const job = new Job();

job.on('done', function(time) {
  console.log('Job was pronounced done at', time);
});

job.emit('done', new Date());

job.removeAllListeners();
