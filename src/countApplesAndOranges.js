function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesPlusA= [];
    let orangesPlusB = [];
    let countA = 0, countB = 0;

    apples.forEach((item) =>{
        applesPlusA.push(item + a)
    })

    oranges.forEach((item) =>{
        orangesPlusB.push(item + b);
    })

    applesPlusA.forEach((item) =>{
        if(s<=item && t>=item){
            countA++;
        }
    })


    orangesPlusB.forEach((item) => {
        if(s<=item && t>=item){
            countB++;
        }
    })


    console.log(countA);
    console.log(countB);

}

countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4]);
