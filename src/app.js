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


export const firstSorted = (arr) => {
   if (arr.length === 0 ) {
      return arr;
    }

    let lowestValue = arr[0];
    let lowestValueIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < lowestValue) {
        lowestValue = arr[i];
        lowestValueIndex = i;
      }
    }

    let temp = arr[0];
    arr[0] = lowestValue;
    arr[lowestValueIndex] = temp;

    return arr;

}
// export const firstSorted = (arr) => {};
// export function highestNumber(arr) {
//   console.log("called");
// }

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

export function evensOnlyArray(numberArray) {
  for (let i = 0; i < numberArray.length; i++) {
    if ( numberArray[i] % 2 !== 0 ) {
      numberArray.splice(i, 1);
    }
  }
  return numberArray;
}

export function arraySum(numberArray) {
  return numberArray.reduce(function(a,b){
    return a + b
  }, 0);
}

export function allNumbersGreaterThanZero(numberArray) {
      function aboveZero(arr) {
        return arr > 0;
      }
      return numberArray.every(aboveZero);
}

export function someNumbersAreOdd (numberArray) {
        function isOdd(arr) {
        return arr % 2;
      }
      return numberArray.some(isOdd);
}

export function findItem(numberArray, n) {
  for (let i=0; i < numberArray.length; i++) {
    if(numberArray[i] != n) {
      return "number not found"
    }  
  }
}

export function evensOnlyAndDoubleArray(numberArray) {
  let doubleArray = numberArray.map((num) => {
      for (let i = 0; i < doubleArray.length; i++) {
        if ( doubleArray[i] % 2 !== 0 ) {
          doubleArray.splice(i, 1);
        } else {
          return num * 2;
        }
    }
  }
)}
  // return numberArray.map((num) => num * 2); //Does the same thing.
