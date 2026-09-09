function countDigit(num){
    let count = 0;
    if(num === 0){
        return ++count;
    }

    while(num > 0){
        count ++;
        num = Math.floor(num/10);
    }

    return count;
}

console.log(countDigit(111111111111111111111));
