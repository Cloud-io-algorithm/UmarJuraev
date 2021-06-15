// ? leedCode two sums  #1
// !exaple 1
// const twoSums = (nums, target) => {
//   let storage = {};
//   for (const [index, num] of nums.entries()) {
//     if (storage[num] !== undefined) return [storage[num], index];
//     storage[target - num] = index;
//   }
// };

//example

// [2, 7, 11, 15];
// index = 0;
// num = 2;

// storage = {
//   '7': 0,
// };

// console.log(twoSums([2, 7, 11, 15], 9));
// !exaple 2

// const twoSums = (nums, target) => {
//   let storage = [];
//   for (let i = 0; i < nums.length; i++) {
//     nums.forEach((elem, index) => {
//       if (elem + nums[i] == target) {
//         storage.push(index);
//       }
//     });
//   }
//   return storage.reverse();
// };

// console.log(twoSums([2, 7, 11, 15], 9));

// !exaple 3

// const twoSums = (nums, target) => {
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         result.push(i);
//         result.push(j);
//       }
//     }
//   }
//   return result;
// };

// console.log(twoSums([2, 7, 11, 15], 9));
// !exaple 4

// const twoSums = (nums, target) => {
//   const numObject = {};
//   for (let i = 0; i < nums.length; i++) {
//     numObject[nums[i]] = i;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];
//     if (numObject[diff] && numObject[diff] !== i) {
//       return [i, numObject[diff]];
//     }
//   }
// };

// console.log(twoSums([2, 7, 11, 15], 18));

// !leedcode reverse
// ? example 1

const reverse = function (x) {
  let b,
    sum = 0;
  while (x > 0) {
    b = x % 10;
    sum = sum * 10 + b;
    x = Math.floor(x / 10);
  }
  return sum;
};

console.log(reverse(120));

// ? example 2

const reverse = function (x) {
  if (x < 0) return -1 * reverse(-x);
  const solution = (x + "").split("").reverse().join("");
  return solution > 2 ** 31 - 1 ? 0 : solution;
};

console.log(reverse(-123456789));
