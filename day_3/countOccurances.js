let arr = [1,2,3,4,5,6,7,8,8,9,9,8,7,8,4,3,2,1,5,6,8,9,7,5,3,3,2,7,4,2,6,9,0,6,4,2,1,2,4,5,7,7,8,8,3,5,8,0,4,6,7,9,4,6,8,9,0,];

function countOccur(arr, target){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            count++;
        }
    }
    return count;
}

console.log(countOccur(arr, 5));
console.log(countOccur(arr, 6));
console.log(countOccur(arr, 9));
