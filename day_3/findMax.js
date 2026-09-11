let arr = [1,2,3,4,5,6,7,8,9]

function findMax(arr){
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max
}

console.log(findMax(arr));
