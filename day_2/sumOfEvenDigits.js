function sumOfEvenDigits(num){
    let sum = 0;
    if(num === 0) return sum;

    while(num > 0){
        let digit = num%10;
        if(digit %2 === 0){
            sum += digit;
        }
        num = Math.floor(num/10);
    }
    return sum;
}

console.log(sumOfEvenDigits(583924));
console.log(sumOfEvenDigits(222222));
console.log(sumOfEvenDigits(0));
