function factorialOfNum(num) {
    let fact = 1;
 // Check if the input is null, undefined, or NaN
    if (num === null || num === undefined || isNaN(num)) {
        console.log(`Factorial of num:${num}: Invalid input.`);
        return;
    }
    else{
    
               for (let index = num; index >=1; index--) {
                fact = fact * index;
                
               }
               console.log(`Factorial of num: ${num} is :${fact}`);
            return;

            }

}

factorialOfNum(5);
factorialOfNum(3); 
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);



