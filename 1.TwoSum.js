/*
    Problem: 1. Two Sum
*/
let nums = [2,3,3]; 
let target = 6
var twoSum = function(nums, target) {
    let start = 0;
    let arrLen = nums.length-1;
    
    for(let i=0; i<=arrLen; i++){
        console.log(nums[i]);
        let sum = nums[i] + nums[i+1];
        if(sum === target){
            return `${i} ${i+1}`
        }
        else{
            continue;
        }
    }
};
console.log(twoSum(nums, target));