/*
Problem: 191. Number Of 1 Bits
*/
let n=0000000000011101;

// console.log(n.toString().replace(/^0+/, ''))
// var hammingWeight = function(n){
//     console.log([...String(n)].map(Number))
// }
// console.log(hammingWeight(n));

var hammingWeight = function (n) {
    let count = 0;
    while (n !== 0) {
      count +=1;
      n &= n - 1;
    }
    return count;
  };
console.log(hammingWeight(n))



// console.log(padStart(n))

// console.log(Math.abs(n))


var hammingWeight = function(n) {
    // console.log(parseInt(n).replace(/^0+/, ''))
    // let explitZero = BigInt(n);
    let count = 0;
    // const splitNum = [...String(n)].map(Number)
    while(n !==0){
        count++;
        n &= n-1
    }
    return count;
};
console.log(hammingWeight(n));


























// var hammingWeight = function(n) {
//     let count = 0;
//     console.log(n.length)
//     for(let i=0; i<n.length; i++){
//         console.log(i)
//         if(i == 1){
//             count +=i;
//         }
//         console.log(count)
//     }
//     return count;
// };
// console.log(hammingWeight(n));