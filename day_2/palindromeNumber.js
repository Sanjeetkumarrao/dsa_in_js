function isPalindrome(num){
    if(num === 0){
        return true;
    }

    let original = num;
    let reverse = 0;

    while(num > 0){
        let lastDigit = num % 10;
        reverse = reverse*10 + lastDigit;
        num = Math.floor(num/10);
    }
    if(original === reverse){
        return true
    }
    return false
}

console.log(isPalindrome(0));
console.log(isPalindrome(121));
console.log(isPalindrome(12345));
console.log(isPalindrome(12211221));
console.log(isPalindrome(122112214));
