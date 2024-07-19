// If ga oid masalalar

// 1 masala

// let age = +prompt("Yoshingizni kiriting");
// let res = "";
// if(age >= 18){
//     res = "Siz katta yoshdagisiz";
// } else {
//     res = "Siz hali yoshsiz";
// }
// console.log(res);

// 2 masala

// let num = +prompt("son kiriting");
// let res;
// if (num % 2 == 0){
//     res = "juft son";
// } else {
//     res = "toq son";
// }
// console.log(res, num);

// 3 masala

// let num = +prompt("son kiriting");
// let res;
// if (num > 0){
//     res = "musbat son";
// } else {
//     res = "manfiy son";
// }
// console.log(res, num);

// 4 masala

// let c = +prompt("Haroratni kiriting");
// let res = "";
// if (c > 20){
//     res = "Yengil kiying";
// } else {
//     res = "Qalin kiying"
// }
// console.log(res);

// 5 masala

// let ball = +prompt("ballni kiriting");
// let res = "";
// if (ball > 90){
//     res = "A'lo";
// } if (ball > 89 && ball > 70){
//     res = "Yaxshi";
// } if (ball > 69 && ball > 50){
//     res = "Qoniqarli";
// } if (ball <50){
//     res = "Yomon" ;
// }
// console.log(res);

// 6 masala

// let  name = prompt("Ism kiriting");
// let res = "";
// if ( name === "Ali"){
//     res = "Salom, Ali!";
// } else {
//     res = "Salom, mehmon!";
// }
// console.log(res);

// 7 masala

// let sale = +prompt("Narxni kiriting");
// let res = "";
// if(sale > 100){
//     res = "Chegirma qo'llanildi";
// } else {
//     res = "Chegirma mavjud emas";
// }
// console.log(res);

// Ternary ga oid masalalar

// 1 masala

// let c = +prompt("haroratni kiriting");
// let max;

// max = c > 25 ? "Issiq" : "Sovuq";
// console.log(max);

// 2 masala

// let ball = +prompt("ballni kiriting");
// let max;

// max = ball > 50 ? "O'tdi" : "Yiqildi";
// console.log(max);

// 3 masala

// let num = +prompt("sonni kiriting");
// let max;

// max = num % 2 == 0 ? "Musbat" : "Manfiy";
// console.log(max);

// For ga oid masalalar

//1 masala

// for (let i = 1; i <=10; i++){
//     console.log(i);
// }

// 2 masala

// for (let i = 10; i >=1; i--){
//     console.log(i);
// }

// 3 masala

// for (let i = 1; i <=100; i++){
//     if(i % 2 == 0 )
//         console.log(i);
// }

// 4 masala

// for (let i = 1; i <=100; i++){
//     if(i % 2 == 1 )
//         console.log(i);
// }

// 5 masala

// let sum = 0;
// for( let i = 1; i < 10; i++){
//     sum = sum + i
// }
// console.log(sum);

// 6 masala

// let p = 1;
// for (let i = 1; i <10; i++){
//     p = p * i;
// }
// console.log(p);

// 7 masala

// let num = +prompt("son kiriting");
// let res = 1;
// for (let i = 1; i <= num; i++){
//     res = res * i;
// }
// console.log(res);

//  8 masala

// let p = 1;
// for (let i = 1; i < 50; i++){
//     p = p + i**2;
// }
// console.log(p);

// 9 masala

// let p = 1;
// for (let i = 1; i < 20; i++){
//     p = p + i**3;
// }
// console.log(p);

// 10 masala

// let sum = 0;
// for (let i = 1; i <= 1000; i++) {
//   if (i % 2 == 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// 11 masala

// let a = 5;
// for(let i = 1 ; i<=a; i++){
// console.log('salom');
// }

// 12 masala

// let a = 100;
// let res = 0;
// for (let i = 1; i <= a; i++) {
//   res = res + i * 2;
// }
// console.log(res);

// 14 masala

// let num = +prompt("son kiriting");
// let res = 1;
// for (let i = 1; i <= num; i++){
//     res = i**2;
// }
// console.log(res);

// Boolean ga oid masalalar

// boolean11

// let a = +prompt("1-sonni kiriting");
// let b = +prompt("2-sonni kiriting");
// if (a % 2 == 0 && b % 2 == 0 || a % 2 == 1 && b % 2 == 1 ){
//     console.log(true);
// }else{
//     console.log(false);
// }

// boolean12

// let a = +prompt("1-sonni kiriting");
// let b = +prompt("2-sonni kiriting");
// let c = +prompt("3-sonni kiriting");
// if (a > 0 && b > 0 && c > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// boolean13

// let a = +prompt("1-sonni kiriting");
// let b = +prompt("2-sonni kiriting");
// let c = +prompt("3-sonni kiriting");
// if (a > 0 || b > 0 || c > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// boolean14

// let a = +prompt("1-sonni kiriting");
// let b = +prompt("2-sonni kiriting");
// let c = +prompt("3-sonni kiriting");
// if (a > 0 && b < 0 && c < 0 || a < 0 && b > 0 && c < 0 || a < 0 && b < 0 && c > 0  ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// boolean15

// let a = +prompt("1-sonni kiriting");
// let b = +prompt("2-sonni kiriting");
// let c = +prompt("3-sonni kiriting");
// if (a > 0 && b > 0 && c < 0 || a < 0 && b > 0 && c > 0 || a > 0 && b < 0 && c > 0  ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// boolean16

// let a = +prompt("son kiriting");
// if (a >= 10 && a <= 99 && a % 2 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
