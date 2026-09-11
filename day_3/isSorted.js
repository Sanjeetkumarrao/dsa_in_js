let arr = [1,2,3,4,5,6,7,8,9];
let arr1 = [9,8,7,6,5,4,3,2,1];
let arr2 = [1,2,3,4,5,6,5,3];
let arr3 = [1,2,3,4,5,9,8];

function isSorted(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[i-1]){
            return false;
        }
    }
    return true;
}

console.log(isSorted(arr));
console.log(isSorted(arr1));
console.log(isSorted(arr2));
console.log(isSorted(arr3));