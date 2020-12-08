function birthdayCakeCandles(candles) {
    // Write your code here
    let arr = candles.sort((a,b) => a-b);
    console.log(arr);
    let max = candles[candles.length - 1];
    let count = 0;
    console.log(max);
    candles.forEach((item) =>{
        if(item === max){
            count++;
        }
    })

    console.log(count);
}


birthdayCakeCandles([1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,999]);