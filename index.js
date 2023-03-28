const http = require('http');
const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Mansi!!! This is DEV Node  \n'
  res.end(msg);
});
