let nilai = 79;

if (nilai >= 80 && nilai <= 100) {
  nilai = "A";
} else if (nilai >= 70 && nilai < 80) {
  nilai = "B";
} else if (nilai >= 60 && nilai < 70) {
  nilai = "C";
}

console.log(nilai);

nilai = 60;

//  && semua kondisi harus terpenuhi lalu dia akan menghasilkan nilai true
//  || or salah satu kondisi harus terpenuhi lalu dia akan menghasilkan nilai true
let banding = nilai >= 80 && nilai < 100;
console.log(banding, "&&");
let banding2 = nilai >= 70 || nilai < 100;
console.log(banding2, "||");
let banding3 = nilai != 40;
console.log(banding3);

// Apa bedanya == dengan ===

let x = 40; // tipe data number
let y = "40"; // tipe data string

let banding4 = x == y;
console.log(banding4, "4");
let banding5 = x === y;
console.log(banding5, "5");

let number = 6;

if (number > 5) {
  if (number % 2 === 0) {
    console.log("Aku lebih besar dari 6 dan Genap");
  } else {
    console.log("Aku lebih besar dari 6 dan Ganjil");
  }
} else {
  if (number % 2 === 0) {
    console.log("Aku lebih kecil dari 6 dan Genap");
  } else {
    console.log("Aku lebih kecil dari 6 dan Ganjil");
  }
}
