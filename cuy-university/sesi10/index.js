const siswa = [
    {
    nama: "skebow",
    alamat: "JP",
    usia: 17,
    pekerjaan: "Programmer"
    },
    {
    nama: "skeclow",
    alamat: "ID",
    usia: 14,
    pekerjaan: "Programmer"
    }
]

let i = 0;

function getDetailData() {
    // siswa.map(function (result, ) {
    //     console.table(result)
    // })

    siswa.forEach(result => {
        console.table(result)
    });

    // console.log(`Data yang anda cari adalah: ${siswa}`)
}
