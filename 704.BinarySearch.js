/*
    Problem: 704. Binary Search
*/

let nums = [-1,0,3,5,9,12];
let target = 9
var search = function(nums, target) {
    let start=0;
    let end=nums.length-1;
    let mid;
    while(start <= end){
        mid = Math.floor((start+end)/2);
        if(nums[mid] === target){
            return mid
        }
        else if(nums[mid] < target){
            start = mid + 1;
        }else{
            end = mid -1
        }
        
    }
    return -1
    // console.log(nums[mid]) 
};
console.log(search(nums, target))