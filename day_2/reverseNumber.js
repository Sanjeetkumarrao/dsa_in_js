function reverseNumber(num){
    let reverse = 0;
    if(num === 0){
        return reverse;
    }

    while(num > 0){
        let lastDigit = num % 10;
        reverse = reverse*10 + lastDigit;
        num = Math.floor(num/10);
    }

    return reverse;
}

console.log(reverseNumber(0));
console.log(reverseNumber(12345));
console.log(reverseNumber(123456789));
