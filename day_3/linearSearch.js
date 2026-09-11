
let arr = [1,2,3,4,5,6,7,8,9];

function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return "Item Found At",i;
        }
    }
    return "Not Found";
}

console.log(linearSearch(arr, 7));