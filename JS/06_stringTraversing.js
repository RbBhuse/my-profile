console.log(`// WAP to string "JavaScript"`);
var word = "JavaScript";

for (let index = 0; index < word.length; index++) {
  var element = word.charAt(index);

  console.log(element);
}
console.log(`=================`);
console.log(`// WAP to find character "a"  in string "JavaScript"`);
var word = "JavaScript";
var count = 0;
for (let index = 0; index < word.length; index++) {
  var element = word.charAt(index);
  if (element == "a") {
    count++;
  }
}
console.log(`Character  "a" count is: ${count}`);
