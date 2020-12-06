function staircase(n){
    let result = '';
    for(let i = 1;i<=n;i++){

        for(let j =n - 1;j>=i;j--){
            result += ' ';

        }

        for(let z = 1 ; z<=i ; z++){
            result+= '#';
        }


        result += '\n';
    }
    console.log(result);
}

//this is the easiest way to solve this challenge

// function staircase(n){
//     for(let i= 1;i<=n;i++){
//         console.log(' '.repeat(n-i) + '#'.repeat(i))
//     }
// }


staircase2(3)