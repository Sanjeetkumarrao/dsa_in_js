function fibonacciSeries(num){
    if(num === 0) return 0;
    if(num === 1) return 1;

    let a = 0;
    let b = 1;

    for(let i = 2; i <= num; i++){
        let next = a + b;

        a = b;
        b = next;
    }

    return b;
}

console.log(fibonacciSeries(8));
console.log(fibonacciSeries(4));
console.log(fibonacciSeries(7));
console.log(fibonacciSeries(5));
