console.log(`===========Assignment no:1============`);

function squareOFWordLength(sentence) {
  var lengthOfWords = sentence.length;
  console.log(`Length of word "${sentence}" is: ${lengthOfWords}`);
  var squareOfLength = lengthOfWords ** 2;
  return squareOfLength;
}
console.log(`=========Step no1=========`);
var result = squareOFWordLength("JavaScript");
console.log(`Square of length is: ${result}`);
console.log(`====================`);
var result = squareOFWordLength("Google Chrome");
console.log(`Square of length is: ${result}`);
console.log(`====================`);
var result = squareOFWordLength("Developer Smart");
console.log(`Square of length is: ${result}`);

console.log(`=========Step no2=========`);

function strOperation() {
  var str = "I am Angular Developer";
  var strLength = str.length;
  var strAfterSplit = str.split(" ");
  var totalWords = strAfterSplit.length;
  var result = strLength / totalWords;
  console.log(
    `Result of String length divide by total number of words available in string is:${result} `
  );

  var resultOfMul = strLength * totalWords;
  console.log(
    `Result of string length multiply by total word available of in string: ${resultOfMul}`
  );
}
strOperation();
