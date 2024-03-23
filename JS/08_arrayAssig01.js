console.log(`=========Assignment no:1============`);
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given array is: ${fruits_seasonal}`);

console.log(`=========Step no:1 =======`);
console.log(`First element of array: ${fruits_seasonal[0]}`);
console.log(
  `Last element of array: ${fruits_seasonal[fruits_seasonal.length - 1]}`
);

console.log(`=========Step no:2 =======`);
fruits_seasonal.unshift("Papaya");
console.log(`Adding "Papaya" before "Banana": ${fruits_seasonal}`);

console.log(`=========Step no:3 =======`);
fruits_seasonal.splice(4, 1);
console.log(`Removing "Mango from array:" ${fruits_seasonal}`);

console.log(`=========Step no:4 =======`);
fruits_seasonal.push("Pineapple");
console.log(`Insert element "Pineapple" at last of array:${fruits_seasonal} `);

console.log(`=========Step no:5 =======`);
fruits_seasonal.splice(fruits_seasonal.length - 2, 0, "Dragon Fruit");
console.log(
  `Insert element "Dragon Fruit" before "Water Melon": ${fruits_seasonal}`
);

console.log(`=========Step no:6 =======`);
fruits_seasonal.splice(2, 1, "Kiwi");
console.log(`Replace element "Orange" with "Kiwi": ${fruits_seasonal}`);

console.log(`=========Step no:7 =======`);
const subArray1 = fruits_seasonal.slice(1, 5);
console.log(`Element starting from index 1 to 4: ${subArray1}`);

console.log(`=========Step no:8 =======`);
let len = fruits_seasonal.length;
const subArray2 = fruits_seasonal.slice(len - 3);
console.log(`Last three element of an array: ${subArray2}`);
