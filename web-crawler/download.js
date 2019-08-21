const http = require('http');
const fs = require('fs');
const path = require('path');

const uuidv1 = require('uuid/v1');

const downloadPage = (url = 'http://nodeprogram.com') => {
  console.log('downloading ', url);

  const fetchPage = (urlF, callback) => {
    http
      .get(urlF, (response) => {
        let buffer = '';

        response.on('data', (chunk) => {
          buffer += chunk;
        });

        response.on('end', () => {
          callback(null, buffer);
        });
      })
      .on('error', (error) => {
        console.error(`Got error: ${error}`);

        callback(error);
      });
  };

  fetchPage(url, (error, data) => {
    if (error) {
      console.log(error);
    }

    const folderName = uuidv1();

    fs.mkdirSync(folderName);

    fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url);
    fs.writeFileSync(path.join(__dirname, folderName, 'file.html'), data);

    console.log('download is done in folder ', folderName);
  });
};

downloadPage(process.argv[2]);
