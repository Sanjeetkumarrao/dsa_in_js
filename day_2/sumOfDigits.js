function sumOfDigit(num){
    let sum = 0;
    if(num === 0){
        return sum;
    }

    while(num > 0){
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(sumOfDigit(12345));
console.log(sumOfDigit(0));