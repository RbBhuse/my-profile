console.log("=======Assignment no1=========");
console.log("=======Step no1=======");

function greet() {
  console.log("Hello team Good afternoon");
}

greet();

function favProgLanguage() {
  console.log("My favorite Programming language is JavaScript");
}
favProgLanguage();

console.log("=======Step no2=======");

function personalDetails(firstName, lastName, collageName) {
  console.log("First Name is:", firstName);
  console.log("Last name is:", lastName);
  console.log("College Name is:", collageName);
}
personalDetails("Reshma", "Bhuse", "FTC Sangola");

console.log("=======Step no3=======");

function swapValues(arg1, arg2) {
  console.log("Before Swap");
  console.log("Argument values are:", arg1, " ", arg2);
  var temp = arg1;
  arg1 = arg2;
  arg2 = temp;
  console.log("After Swap");
  console.log("Argument values are:", arg1, " ", arg2);
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);

console.log("=======Step no4 =======");

function addThreeValues(arg1, arg2, arg3) {
  var result = arg1 + arg2 + arg3;
  console.log("Addition is:", result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hi", " Good", " Morning");
