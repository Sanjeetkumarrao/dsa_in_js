let arr = [1,2,3,4,5,6,7,8,9,0];

function maxDifference(arr){
    let max = -Infinity;
    let min = Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }

    return "Max Difference", max - min;
}

console.log(maxDifference(arr));
