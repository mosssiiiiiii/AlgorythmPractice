function plusMinus(arr){
    const n = arr.length;
    let pos = 0 , neg = 0 , zero = 0;
    arr.forEach((item)=>{
        if(item<0){
            neg++;
        }else if(item > 0){
            pos++;
        }else{
            zero++;
        }
    })
    const result = [pos/n,neg/n,zero/n];
    return result;
};


module.exports = plusMinus;