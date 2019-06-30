const fs = require('fs');
const path = require('path');

fs.readFile(
  path.join(__dirname, 'message.txt'),
  {
    encoding: 'utf-8'
  },
  function (error, data) {
    if (error) {
      console.error(error);

      return;
    }

    console.log(data);
  }
);
