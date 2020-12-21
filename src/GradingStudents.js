function grade(arr){
    let n = arr.length;
    let newArray= [];
    if(n > 60 || n < 1){
        return undefined
    }
    arr.forEach((item)=>{
        let remaining = item % 5 ;
        let round = (item - remaining) + 5;
        if(round < 40){
            newArray.push(item);
        }else if(round - item < 3){
            newArray.push(round);
        }else{
            newArray.push(item);
        }
    })

    return newArray;
}


grade([73,67,38,33]);
