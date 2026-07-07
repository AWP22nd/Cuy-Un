const http = require('http');
const host = '127.0.0.1';
const port = 3002;

// In n Out
const server = http.createServer (function (request, response) {
    response.end('Hello World')
});

server.listen(port, host, function () {
    console.log(`Server On . . . ${host}: ${port}`);
});
