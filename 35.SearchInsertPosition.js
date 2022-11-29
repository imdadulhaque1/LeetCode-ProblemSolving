let nums = [1,3,5,6];
let target = 2;

var targetIndices = function(nums, target) {
    // nums = nums.sort();
    [nums[0], nums[1]] = [nums[1], nums[0]];
    let start = 0;
    let end = nums.length - 1;
    let arr = [];
    for (let i = start; i <= end; i++) {
        if (nums[i] === target) {
            arr.push(i)
        }
    }
    return arr
};
console.log(targetIndices, target)