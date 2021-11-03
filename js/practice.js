/*
Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

const reverseAString = (str) => {
  let newStr = "";
  for (var index = str.length - 1; index >= 0; index--) {
    newStr += str[index];
  }
  return newStr;
};
// const _reverseAString = (str) => str.split("").reverse().join("");
// console.log(_reverseAString("Hello World!"));
console.log(reverseAString("Hello World!"));

// /*
// Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.
// */
const factorializeANumber = (num) => {
  let fact = 1;
  for (var index = 1; index <= num; index++) {
    // fact = fact * index
    fact *= index;
  }
  return fact;
};
// const _factorializeANumber = (num) =>
//   num === 0 ? 1 : num * _factorializeANumber(num - 1);
// console.log(_factorializeANumber(5));
console.log(factorializeANumber(4));

// /*
// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.
// */
const longestWordInString = (str) => {
  const arr = str.split(" ");
  let max = 0;
  for (var index = 0; index < arr.length; index++) {
    if (arr[index].length > max) {
      max = arr[index].length;
    }
  }
  return max;
};
const _longestWordInString = (str) =>
  str.split(" ").reduce((acc, val) => Math.max(acc, val.length), 0);
console.log(_longestWordInString("Hello my name is Lois Harris"));
console.log(longestWordInString("Hello my name is Lois Harris"));
// /*
// Filling an array
// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4: ``` fillingArray(5) // [0,1,2,3,4]
// */
const fillingAnArray = (num) => {
  let arr = [];
  for (let index = 0; index < num; index++) {
    arr.push(index);
  }
  return arr;
};

const _fillingAnArray = (num) =>
  new Array(num).fill(0).map((val, index) => val + index);
console.log(_fillingAnArray(5));
console.log(fillingAnArray(5));
// /*
// Grader

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"
// */
const grader = (num) => {
  if (num > 1 || num < 0.6) {
    return "F";
  } else if (num <= 1 && num >= 0.9) {
    return "A";
  } else if (num < 0.9 && num >= 0.8) {
    return "B";
  } else if (num < 0.8 && num >= 0.7) {
    return "C";
  } else {
    return "D";
  }
};
const _grader = (num) =>
  num > 1 || num < 0.6
    ? "F"
    : num <= 1 && num >= 0.9
    ? "A"
    : num < 0.9 && num >= 0.8
    ? "B"
    : num < 0.8 && num >= 0.7
    ? "C"
    : "D";
console.log(grader(0.9));
console.log(grader(0.87));
console.log(grader(0.76));
console.log(grader(1.1));
