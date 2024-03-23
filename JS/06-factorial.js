function factorial(num) {
    let fact = 1;

    for (let index = num; index >=1; index--) {
        fact = fact * index;

    }

    console.log(`Factorial of num: ${num} is :${fact}`);
}

factorial(2);
factorial(7);