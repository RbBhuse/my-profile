const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(`======== Step no:1========`);

console.log(`Given array value: ${arrayNumbers}`);
let len = arrayNumbers.length;
console.log(`Total number of Element available is Array: ${len}`);

console.log(`======== Step no:2========`);
console.log(`First element: ${arrayNumbers[0]} `);
console.log(`Last  element: ${arrayNumbers[len - 1]} `);

console.log(`======== Step no:3========`);
console.log(`Third last Element: ${arrayNumbers[len - 3]}`);

console.log(`======== Step no:4========`);
console.log(`Even number using for of loop`);
for (const element of arrayNumbers) {
  if (element % 2 == 0) {
    console.log(element);
  }
}

console.log(`======== Step no:5========`);
console.log(`odd number using for of loop`);
for (const element of arrayNumbers) {
  if (element % 2 != 0) {
    console.log(element);
  }
}

console.log(`======== Step no:6========`);
console.log(`Even position number`);
for (let index = 0; index < arrayNumbers.length; index = index + 2) {
  console.log(arrayNumbers[index]);
}
console.log(`======== Step no:7========`);
console.log(`odd  position number`);
for (let index = 1; index < arrayNumbers.length; index = index + 2) {
  console.log(arrayNumbers[index]);
}

console.log(`======== Step no:8========`);

let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  sum = sum + arrayNumbers[index];
}
console.log(`Sum of all Element in array: ${sum}`);

console.log(`======== Step no:9========`);
console.log(`Numbers multiple of 5`);

for (let index = 0; index < arrayNumbers.length; index++) {
  if (arrayNumbers[index] % 5 == 0) {
    console.log(arrayNumbers[index]);
  }
}
console.log(`======== Step no:10========`);

let is115Available = arrayNumbers.includes(115);
console.log(`Is number "115" available in array: ${is115Available}`);

console.log(`======== Step no:11========`);
let is23Available = arrayNumbers.includes(23);
console.log(`Is number "23" available in array: ${is23Available}`);

console.log(`======== Step no:12========`);
console.log(`Insert number "55,66 at index 3"`);
arrayNumbers.splice(3, 0, 55, 66);
console.log(`Modified array: ${arrayNumbers}`);

console.log(`======== Step no:13========`);

console.log(`Delete 3 element starting from index 4`);
arrayNumbers.splice(4, 3);
console.log(`Modified array: ${arrayNumbers}`);
