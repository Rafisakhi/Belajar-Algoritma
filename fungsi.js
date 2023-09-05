function helloworld() {
  return "Hallo bruh";
} // fungsi ini punya nilai hello bruh

console.log(helloworld());

function test() {
  console.log("hallo world");
}

test();

// console.log(test());

//return memberikan nilai ke fungsi , bila tidak memberikan nilai di fungsi
// maka fungsi tersebut memiliki nilai undifined

let hallo = helloworld();
let hello1 = "Hallo bruh";

function tambahAngka(angka1, angka2) {
  //prameter disini bisa banyak sekali sesuai kebutuhan
  return (angka1 += angka2);
}

console.log(tambahAngka(45, 32));

let angka5 = tambahAngka(3, 2);
console.log(angka5);

console.log("");

function balikAngka(kata) {
  let data = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    data += kata[i];
  }

  return data;
}

console.log(balikAngka("Rafi"));

console.log("");

function kapital(kata) {
  let result = "";
  for (let i = 0; i < kata.length; i++) {
    if (i === 0 || kata[i - 1] === " ") {
      result += kata[i].toUpperCase();
    } else {
      result += kata[i];
    }
  }

  return result;
}

console.log(kapital("rafi sakhi"));
