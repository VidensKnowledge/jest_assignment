// export function lowestNumber(arr) {
//   if (arr.length === 0) {
//     return "no values";
//   }

//   let lowestValue = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < lowestValue) {
//       // swap
//       lowestValue = arr[i];
//     }
//   }
//   return lowestValue;
// }

// // return array with all even numbers
// evensOnlyArray(numberArray) // => [2,4];  hint use filter 

// // return array with sum of numbers
// arraySum(numberArray) // => 10;  hint use reduce

// // return true if every item greater than 0
// allNumbersGreaterThanZero(numberArray) // => true; use every

// // return true if one or more items in array are odd
// someNumbersAreOdd(numberArray) // => true; use some

// // return array double and even
// evensOnlyAndDoubleArray(numberArray) // => [4,8]; // use map and filter

// // find an item method return 'not found' if not found
// findItem(numberArray, 1) //=> 1

let numberArray = [1,2,3,4];

export function originalArray(arr) {
  return numberArray;
}

export const firstSorted = (arr) => {};
export function highestNumber(arr) {
  console.log("called");
}

// export default function demo(arr) {
//   console.log("demo");
// }

export function doubleArray(numberArray) {
  let doubleArray = numberArray.map((num) => {
    return num * 2;
  })
  // return numberArray.map((num) => num * 2); //Does the same thing.
}

export  function sortDesc(numArr) {
  return numArr.sort((a,b) => {
    return b - a;
  })
}
