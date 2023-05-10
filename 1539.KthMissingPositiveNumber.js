// Problem: 1539. Kth Missing Positive Number

let arr = [2, 3, 4, 7, 11];
let k = 5;

let findKthPositive = function (arr, k) {
  let i = 0,
    n = 1;
  let mArr = [];
  while (mArr.length < k) {
    n === arr[i] ? (i++, n++) : (mArr.push(n), n++);
  }
  return mArr[k - 1];
};

console.log(findKthPositive(arr, k));
