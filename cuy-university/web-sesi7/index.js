const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const os = require('os');

const host = '127.0.0.1'
const port = 3002

// In n Out
const server = http.createServer (function (request, response) {
    const nama = "Skebow";
    let uang = 1000000;
    let belanja = 100000;
    let sisa = uang - belanja;

    uang = rupiah.convert(uang)
    belanja = rupiah.convert(belanja)
    sisa = rupiah.convert(sisa)

    fs.appendFile('sisauang.txt', sisa, () => {
        console.log('Data uang berhasil disimpan');
    });

    const sisaRAM = os.freemem();
    const jumlahCPU = os.cpus();

function checkCPU() {
    let myCPU = [];
    jumlahCPU.map((cpu, i) => {
        myCPU.push(cpu.model)
    })
    return myCPU
}

    console.log(checkCPU())

    const hasil = `
    
    <head>
        <title>${nama}</title>
    </head>
    <body>
        <h1 style = 'background: green; color: white; padding: 18px; text-align: center'> NODE JS </h1>
        <p>
            Hi ${nama}! Anda belanja sebanyak ${belanja}, uang yang Anda gunakan sebnayak ${uang} lalu menjadi ${sisa}.
        </p>
        <h5> Sisa RAM PC saya: ${sisaRAM}'</h5>
        <h5> Sisa CPU PC saya: <br/> ${jumlahCPU}'</h5>
        <h5> CPU PC saya: <br/> ${checkCPU()}'</h5>
    </body>    
    `
    response.statusCode = 200;
    response.end(hasil)
});

server.listen(port, host, function () {
    console.log(`Server On . . . ${host}: ${port}`);
});
