function largestOfThree(a, b, c) {
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    return c;
}

console.log(largestOfThree(1,2,3));
console.log(largestOfThree(7,6,5));
console.log(largestOfThree(7,8,5));
console.log(largestOfThree(10,25,7));