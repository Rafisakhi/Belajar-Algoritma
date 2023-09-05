// while ()
// for

// let i = 5;

// while (i >= 5) {
//   console.log(i);
//   i--;
// }

// dalam looping ada yang namanya arah , kiri itu pengurangan kanan itu pertambahan
//hati hati ketika infinite loop atau loopinya tidak berjalan

// let nama = "Rafi";

// for (let i = 0; i < nama.length; i++) {
//   console.log(nama[i]);
// }

// oke jadi pada tipe data string atau array di javascript ada namanya indexing
// dimana index itu sudah pasti berawal dari 0

// let nama = "sakhi"; // length 5 , sedangkan index itu mulai dari 0, s-> 0, a->1, k->2, h->3, i->4
// let result = "";
// for (let i = nama.length - 1; i >= 0; i--) { // i = 5 - 1 , 5 - 1 >= 0, i--
//   result += nama[i]; // i => ih => ka => s
//ada perintah lagi
// }

// console.log(result);
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < i; j++) {
//     console.log(j);
//   }
//   console.log("");
// }

// console.log("selesai");

// Kesimpulan looping sering bertemu dengan method length
// looping itu agar membuat  code jadi lebih pendek
// looping itu agar membuat suatu proses menjadi dinamis

// counter pada looping

// let i = 0; // i ada lah counter

// while (i < 100) {
//   console.log(i);
//   i += 2; // disini counternya ditentukan besarnya berapa
// }

// let i = 0;

// // disini kita akan belajar menggabungkan dengan if and else
// while (i < 50) {
//   // disini kita akan mencari ganjil dan genap
//   if (i % 2 === 0) {
//     console.log(`${i} adalah Genap`);
//   } else {
//     console.log(`${i} adalah Ganjil`);
//   }

//   i++;
// }

// simpelnya modulus operator adalah sisa bagi
// misal 3 / 2 hasinlnya akan koma dan kalau 3 % 2 hasilnya akan 1
// maka bisa dibilang apapun angkanya kalau dimodulus apapun itu angkanya juga hasilnya adalah 0
// maka itu adalah keipatanya
// contoh m % 3 === 0 // maka ini adalah kelipatan 3
// contoh m % 5 === 0 // maka ini adalah kelipatan 5
// contoh m % 2 === 0 // maka ini adalah kelipatan 2 dan 2 kebutaln bisa menentukan ganjil atau genap

// Problem fizzbuzz
// jika i adalah kelipatan 3 maka tampilkan fiz
// jika i adalah kelipatan 5 maka tampilkan buzz
// jika i adalah kelipatan 3 dan sekaligus 5 maka tampilkan fizzbuzz
//jika bukan kelipatan diatas maka tampilkan angka

// for (let i = 0; i < 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0 && i % 5 !== 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0 && i % 3 !== 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0 && i % 3 !== 0) {
//     console.log("hello woi");
//   } else {
//     console.log(i);
//   }
// }
// disini kalian harus coba coba iseng ubah kindisional statemenya
//  demi pemahaman lebih lanjut

//pada looping ada namanya break dan countinue
// break membuat loop berhenti sepenuhnya
// continue membuat loop skip di iterasi tertentu

for (let i = 0; i < 10; i++) {
  if (i === 7) {
    continue;
  }
  console.log(i);
}
