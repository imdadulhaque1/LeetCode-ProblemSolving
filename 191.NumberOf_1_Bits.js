let n = 00010110;

// console.log("00010110".replace(/^0+/, ''))
console.log(padStart(n))


var hammingWeight = function(n) {
    // let explitZero = BigInt(n);
    let count = 0;
    const splitNum = [...String(n)].map(Number)
    for(let i=0; i<splitNum.length; i++){
        console.log(splitNum[i]) 
        if(splitNum[i] == 1){
            count += 1
            console.log(splitNum[i])
        }
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