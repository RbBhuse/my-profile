console.log(`==========step no:1 ===========`);
const array = [3, 9, 7, 6, 19, 29, 53];
let count = 0;
console.log(`Given array:${array}`);
for (let index = 0; index < array.length; index++) { 
    let isPrime = true;
    for (let i = 2; i < array[index]; i++) {
        if (array[index] % i === 0) {
          isPrime = false;
        }
    }
        if (isPrime && array[index] > 1) {
            count++;
        }
}

console.log(`Prime number count is: ${count}`);
console.log(`==========step no:2 ===========`);
function spaceCount(str){
console.log(`Given string is : ${str}`);
const newStr = str.split(" ");
let lenSplitStr = newStr.length;
console.log(`Total count space in string: ${lenSplitStr-1}`);
}
spaceCount("Revision is the mother of success");
spaceCount("JavaScript is the language of internat world");
