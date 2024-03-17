console.log(`===========Assignment no:1============`);
console.log(`==========Step no1==========`);

function greaterNumber(num1, num2) {
  var result =
    num1 > num2 ? `Greater number is:${num1}` : `Greater number is:${num2}`;
  console.log(result);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log(`==========Step no2==========`);

function isEvenOrOddNum(arg) {
  console.log(`Given number is : ${arg} `);
  return arg % 2 == 0 ? true : false;
}

var res = isEvenOrOddNum(29);
console.log(res);
var res = isEvenOrOddNum(44);
console.log(res);
var res = isEvenOrOddNum(0);
console.log(res);
var res = isEvenOrOddNum(101);
console.log(res);

console.log(`==========Step no3==========`);

function wordLength(str) {
  console.log(`Given is string is: "${str}"`);
  var wordLen = str.length;
  return wordLen % 2 == 0 ? "EVEN" : "ODD";
}

var res = wordLength("Javascript");
console.log(` Length of string is : ${res}`);

var res = wordLength("developer");
console.log(` Length of string is : ${res}`);

var res = wordLength("Google");
console.log(` Length of string is : ${res}`);
