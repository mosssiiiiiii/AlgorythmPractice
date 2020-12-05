const plusMinus = require('./plusMinus')

describe('plus minus test',() =>{
    test('one', () =>{
        expect(plusMinus([-4, 3 ,-9 ,0 ,4, 1])).toEqual([0.5,0.3333333333333333,0.16666666666666666]);
    })

    test('two', () =>{
        expect(plusMinus([7, 3 ,-9 ,0 ,4,0,-5, 1])).toEqual([0.5,0.25,0.25]);
    })
})