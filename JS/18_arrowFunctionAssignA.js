console.log(`==============Step no:1===============`);
let show = ()=>{
    console.log(`Today is  a Thursday`);
}
show();

console.log(`==============Step no:2===============`);
let multiplication = (arg1,arg2,arg3=1)=>{
  console.log(`Given values are: ${arg1}, ${arg2}, ${arg3}`);
    let result = arg1*arg2*arg3;
    console.log(`Multiplication is: ${result}`);
}
multiplication(5,5,2);

multiplication(10,4);

console.log(`==============Step no:3===============`);
 let addition =(arg1,arg2,arg3,arg4,arg5) =>{
    console.log(`Given values are: ${arg1}, ${arg2}, ${arg3},${arg4},${arg5}`);
    let result = arg1+arg2+arg3+arg4+arg5;
    return result;
 }

let result = addition(100,100,200,349,756)
console.log(`Addition is : ${result}`);
let result1 = addition("I am ", "learning ", "ES6 ","features ","in depth");
console.log(`Addition is : ${result1}`);
console.log(`================`);