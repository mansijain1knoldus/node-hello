const http = require('http');
const port = process.env.PORT || 3000;
const port2 = process.env.PORT2 || 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Mansi!!! This is autocommited line \n'
  res.end(msg);
});

const server2 = http.createServer((req, res) => {
	res.statusCode = 200;
	const msg2 = 'Hello Mansi.. This is Node!\n'
	res.end(msg2);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

server2.listen(port2, () => {
	console.log(`Server2 running on http://localhost:${port2}/`);
})