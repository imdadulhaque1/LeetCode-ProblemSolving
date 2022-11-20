let low = 3;
let high = 7;
var countOdds = function(low, high) {
    let count=0;
    for(let i=low; i<=high; i++){
        if(i%2 !=0){
            count += 1
        }
    }
    return count;
};

console.log(countOdds(low, high))