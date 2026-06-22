const namaSaya = "Skeclow";
let usiaSaya = 30;

let bio = document.getElementById("bio");
// console.log(bio);

function info() {
    let golongan;

    if(usiaSaya > 10 && usiaSaya < 18) { 
        golongan = "Golonagn Remaja";
    }
    else if(usiaSaya > 18 && usiaSaya < 30) {
        golongan = "Golongan Dewasa";
    }
    else if(usiaSaya >= 30) {
        golongan = "Golongan Tua";
    }
    else if(usiaSaya > 2 && usiaSaya < 10) {
        golongan = "Golonagn Anak-anak";
    } 
    else {
        golongan = "Golongan Bayi";
    }
    // console.log(`Nama saya adalah ${namaSaya} dan usia saya ${usiaSaya} tahun` );
    return bio.innerHTML = golongan;
}

// console.log(namaSaya);
// console.log(usiaSaya);

info();


