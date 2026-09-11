let arr = [9,8,7,6,5,4,3,2,1];

function secondSmallest(arr){
    let smallest = Infinity;
    let second = Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            second = smallest;
            smallest = arr[i];
        }
        else if (arr[i] > second && second !== smallest){
            second = arr[i];
        }
    }

    return second;
}

console.log(secondSmallest(arr));
