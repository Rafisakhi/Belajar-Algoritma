// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 29; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 4; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
let mouth = "";
//code switch case kamu disini

switch (tanggal) {
  case tanggal >= 1 && tanggal <= 31:
  default:
    break;
}

switch (bulan) {
  case 1:
    mouth = "januar";
    break;
  case 2:
    mouth = "februari";
    break;
  case 3:
    mouth = "Maret";
    break;
  case 4:
    mouth = "April";
    break;
  case 5:
    mouth = "Mei";
    break;
  case 6:
    mouth = "Juni";
    break;
  case 7:
    mouth = "Juli";
    break;
  case 8:
    mouth = "Agustus";
    break;
  case 9:
    mouth = "September";
    break;
  case 10:
    mouth = "Oktober";
    break;
  case 11:
    mouth = "Novenber";
    break;
  case 12:
    mouth = "Desember";
    break;
  default:
    break;
}

switch (tahun) {
  case tahun >= 1990 && tahun <= 2200:
    break;

  default:
    break;
}

console.log(`${tanggal} ${mouth} ${tahun}`);
