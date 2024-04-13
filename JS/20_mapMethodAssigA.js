const arrayNumbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
console.log(`==========step no:1==========`);
console.log(`Add 10 into each element and log new array`);
console.log(`Given array value: ${arrayNumbers}`);
let newArray = arrayNumbers.map((currentValue)=>{
 
    return currentValue+10;
})
console.log(newArray);

console.log(`==========step no:2==========`);
console.log(`Cube the each array element`);
let arrayCube= arrayNumbers.map((currentValue)=>{
    return currentValue*currentValue*currentValue;
})
console.log(arrayCube);

console.log(`==========step no:3==========`);
console.log(`Add the index value into its corresponding each array element`);

let transformArray= arrayNumbers.map((element,index)=>{
 return element+index;
})

console.log(transformArray);