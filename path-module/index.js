const path = require('path');

const relativePath = path.join('app', 'server.js');

console.log('Relative to process path:', relativePath);

const absolutePath = path.join(__dirname, 'app', 'server.js');

console.log('Absolute path:', absolutePath);
