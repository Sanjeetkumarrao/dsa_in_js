function reverseNumber(n) {
    let result = 0;
    while(n>0){
        let digit = n % 10;
        result = result * 10 + digit;
        n = Math.floor(n/10);
    }
    return result;
}

console.log(reverseNumber(1234));
console.log(reverseNumber(12345));
console.log(reverseNumber(123456));