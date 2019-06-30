const fs = require('fs');
const path = require('path');

fs.writeFile(
  path.join(__dirname, 'message.txt'),
  'Hello World!',
  function (error) {
    if (error) {
      console.error(error);

      return;
    }

    console.log('Writing is done.');
  }
);
