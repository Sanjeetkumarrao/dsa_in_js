let arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]

function secondLargest(arr){
    let largest = -Infinity;
    let second = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            second = largest;
            largest = arr[i];
        }
        else if(arr[i] > second && arr[i] !== largest){
            second = arr[i];
        }
    }

    return [second, largest];
}

console.log(secondLargest(arr));
