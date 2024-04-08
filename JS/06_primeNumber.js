function isPrime(num){
    for (let index = 2; index < num; index++) {  
      if (num%index==0) {  
       return false;  
      }   
    }  
    return true;
   } 
   const result = isPrime(7); 
   console.log(`Is 7 Prime Number : ${result}`);  
   const result1 = isPrime(9);  
   console.log(`Is 7 Prime Number : ${result1}`);

const array = [3, 9, 7, 6, 19, 29, 53];
let count = 0;

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