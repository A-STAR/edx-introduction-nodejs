const fs = require('fs');
const path = require('path');

const csv = require('csvtojson');

csv()
  .fromFile(path.join(__dirname, 'data', 'customer-data.csv'))
  .then((data) => {
    console.log(data);

    const folderName = 'converted';
    const jsonData = JSON.stringify(data, undefined, 2);

    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }

    fs.writeFile(
      path.join(__dirname, folderName, 'customer-data.json'),
      jsonData,
      (error) => {
        if (error) {
          return process.exit(1);
        }

        console.log('done');

        process.exit(0);
      }
    );
  })
  .catch((error) => {
    if (error) {
      return process.exit(1);
    }
  });
