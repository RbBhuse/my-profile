console.log(`========Assignment no:1========`);
console.log(`=======Step no:1=======`);
const string = "I am very good IT Developer";
const vowels = "aeiou";
let vowelsCount = 0;
for (let index = 0; index < string.length; index++) {
  let element = string.charAt(index);
  let lowercase = element.toLowerCase();

  if (vowels.includes(lowercase)) {
    vowelsCount++;
  }
}
console.log(`Count of Vowels: ${vowelsCount}`);

console.log(`=======Step no:2=======`);
let sum = 0;
for (let index = 0; index <= 5; index++) {
  sum = sum + index * index * index;
}

console.log(`Sum of cube of number from 1 to 5: ${sum}`);
console.log(`=======Step no:3=======`);

function oddPositionedChars(str) {
  for (let index = 0; index < str.length; index++) {
    let element = str.charAt(index);
    if (index % 2 != 0 && element != " ") {
      console.log(element);
    }
  }
}

console.log(`charter at Odd positioned in first string1`);
oddPositionedChars("Hard work always plays back");
console.log(`charter at Odd positioned in first string2`);
oddPositionedChars("Soon I will be UI IT Champ");
