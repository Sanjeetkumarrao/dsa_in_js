let arr = [1,2,3,4,5,6,7,8,8,8,8];
let arr1 = [1,2,3,4,5,5,6,7,8,9];

function findDuplicate(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j] && i !== j){
                return arr[i]
            }
        }
    }
    return "none";
}

console.log(findDuplicate(arr));
console.log(findDuplicate(arr1));
