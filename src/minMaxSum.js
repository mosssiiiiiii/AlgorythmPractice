function minMaxSum(arr){
    arr = arr.sort();
    let max = 0, min = 0;
    for(let i=0;i<arr.length;i++){

        if(i>0){
            min+= arr[i];
        }

        if(i<arr.length -1) {
            max += arr[i];
        }
    }

    console.log(max,min)
}

// the best way to solve this challenge is

// function minMaxSum(arr){
//     arr = arr.sort();
//     let sum = arr.reduce((total,item) => total + item);
//     let min = sum - arr[arr.length-1];
//     let max = sum - arr[0];
//
//     console.log(max,min);
// }


minMaxSum([1, 2 ,3 ,4 ,5])