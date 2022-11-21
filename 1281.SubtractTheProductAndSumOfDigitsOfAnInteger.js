/*
Problem: 1281. Subtract the Product and Sum of Digits of an Integer
*/

n = 4421
var subtractProductAndSum = function(n) {
    const splitNum = [...String(n)].map(Number)
    let product=1;
    let sum=0;
    for(let i=0; i<splitNum.length; i++){
        let newNum = parseInt(splitNum[i])
        sum = sum + newNum
        product = product * newNum;
    }
    return product - sum
    
};
console.log(subtractProductAndSum(n))