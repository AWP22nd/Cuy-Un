const http = require('http');
const rupiah = require('rupiah-format');
const host = '127.0.0.1';
const port = 3002;

// In n Out
const server = http.createServer (function (request, response) {
    const name = 'Skebow';
    const mon = 1000000;
    const shopping = 100000;
    const chan = mon - shopping;

    const sisaRupiah = rupiah.convert(sisa);
    console.log('Sisa Rupiah: ', sisaRupiah);

    const resl = `
    
    <head>
        <title>${name}</title>
    </head>
    <body>
        <h1 style = 'background: green; color: white; padding: 18px; text-align: center'> NODE JS </h1>
        <p>
            Hi ${name}! Anda belanja sebanyak ${shopping}, uang yang Anda gunakan sebnayak ${mon} lalu menjadi ${chan}.
        </p>
    </body>    
    `
    response.statusCode = 200;
    response.end(resl)
});

server.listen(port, host, function () {
    console.log(`Server On . . . ${host}: ${port}`);
});
