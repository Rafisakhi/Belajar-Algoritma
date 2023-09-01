//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

//code here
// ---------------------------------------
console.log(
  " " +
    word +
    " " +
    second +
    " " +
    third +
    " " +
    fifth +
    " " +
    sixth +
    " " +
    seventh
);
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

console.log("========================================");

let word2 = "wow JavaScript is so cool";
let exampleFirstWord = word2[0] + word2[1] + word2[2];
let exampleTwoword =
  word2[4] +
  word2[5] +
  word2[6] +
  word2[7] +
  word2[8] +
  word2[9] +
  word2[10] +
  word2[11] +
  word2[12] +
  word2[13] +
  word2[14];
let exampleTreeword = word2[15] + word2[16];
let exampleFourword = word2[18] + word2[19];
let exampleFiveword = word2[21] + word2[22] + word2[23] + word2[24];

console.log("First Word: " + exampleFirstWord);
console.log("Two Word : " + exampleTwoword);
console.log("Tree Word : " + exampleTreeword);
console.log("Four Word : " + exampleFourword);
console.log("Five Word : " + exampleFiveword);

// ---------------------------------------
console.log(
  "Answer :" +
    " " +
    exampleFirstWord +
    " " +
    exampleTwoword +
    " " +
    exampleTreeword +
    " " +
    exampleFourword +
    " " +
    exampleFiveword
);
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

console.log("========================================");

let word3 = "wow JavaScript is so cool";
let exampleFirstWord3 = word3.substring(0, 3);
let exampleFirstWord4 = word3.substring(4, 14);
let exampleFirstWord5 = word3.substring(15, 17);
let exampleFirstWord6 = word3.substring(18, 20);
let exampleFirstWord7 = word3.substring(21, 25);

console.log("First Word: " + exampleFirstWord3);
console.log("Two Word: " + exampleFirstWord4);
console.log("Tree Word: " + exampleFirstWord5);
console.log("Four Word: " + exampleFirstWord6);
console.log("Five Word: " + exampleFirstWord7);

// ---------------------------------------
console.log(
  "Answer: " +
    exampleFirstWord3 +
    " " +
    exampleFirstWord4 +
    " " +
    exampleFirstWord5 +
    " " +
    exampleFirstWord6 +
    " " +
    exampleFirstWord7 +
    "\n"
);
// ---------------------------------------

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = "wow JavaScript is so cool";
let exampleFirstWord8 = word4.substring(0, 3);
let exampleFirstWord9 = word4.substring(4, 14);
let exampleFirstWord10 = word4.substring(15, 17);
let exampleFirstWord11 = word4.substring(18, 20);
let exampleFirstWord12 = word4.substring(21, 25);

let firstWordLength = exampleFirstWord8.length;
let twoWordLength = exampleFirstWord9.length;
let treeWordLength = exampleFirstWord10.length;
let fourWordLength = exampleFirstWord11.length;
let fiveWordLength = exampleFirstWord12.length;

console.log(
  "First Word: " +
    exampleFirstWord8 +
    ", with length: " +
    firstWordLength +
    "\n" +
    "Two Word: " +
    exampleFirstWord9 +
    ", with length: " +
    twoWordLength +
    "\n" +
    "Tree Word: " +
    exampleFirstWord10 +
    ", with length: " +
    treeWordLength +
    "\n" +
    "Four Word: " +
    exampleFirstWord11 +
    ", with length: " +
    fourWordLength +
    "\n" +
    "five Word: " +
    exampleFirstWord12 +
    ", with length: " +
    fiveWordLength
);
