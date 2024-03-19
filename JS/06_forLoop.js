console.log(`// WAP to print numbers from 0 to 10`);

for (let index = 0; index <= 10; index++) {
  console.log(index);
}

console.log(`=================`);

console.log(`// WAP to print numbers from 15 to 24`);
for (let index = 15; index <= 24; index++) {
  console.log(index);
}
console.log(`=================`);

console.log(`// WAP to print numbers from 10 to 5`);
for (let index = 10; index > 4; index--) {
  console.log(index);
}
//  console.log(`=================`);

//  console.log(`// WAP to print  even numbers from 0 to 20`);
//  for (let index = 0; index <=20; index++) {
//         if (index%2==0) {
//             console.log(index);
//         }
//  }

console.log(`=================`);
console.log(`// WAP to print  even numbers from 0 to 20`);
for (let index = 0; index <= 20; index = index + 2) {
  console.log(index);
}
console.log(`=================`);

console.log(`// WAP to print  ODD numbers from 15 to 29`);
for (let index = 15; index <= 29; index = index + 2) {
  console.log(index);
}
console.log(`=================`);

console.log(`// WAP to string "JavaScript"`);
var word ="JavaScript";
for (let index = 0; index < word.length; index++) {
    let character = word.charAt(index);
    console.log(character);
    
}

// console.log(`// WAP to string "JavaScript"`);
// var word = "JavaScript";

// for (let index = 0; index<word.length; index++) {

//     var element = word.charAt(index);

//     console.log(element);

// }