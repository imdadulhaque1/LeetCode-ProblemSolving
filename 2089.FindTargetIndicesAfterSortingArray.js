// Problem : 2089. Find Target Indices After Sorting Array
let nums = [1, 2, 5, 2, 3];
let target = 2;

var targetIndices = function (nums, target) {
  // nums.sort();
  nums.sort((a, b) => a - b);
  let start = 0;
  let end = nums.length - 1;
  let arr = [];

  while (start <= end) {
    let matchingResult = target === nums[start] ? "Found" : "Not Found";
    if (matchingResult === "Found") {
      arr.push(start);
    }
    start++;
  }

  return arr;
};

console.log(targetIndices(nums, target));
