
// //exercice 1
// function getPairsCount(arr, n)
// {
  
//     // Consider all possible pairs and check their sums
//     for (let i = 0; i < n; i++){
//         for (let j = i + 1; j < n; j++){
//             if (arr[i] + arr[j] == n)
//                 return true;
                   
//         }   
//     }
//     return false;
// }


// console.log(getPairsCount([10, 15, 3, 7], 17));
// console.log(getPairsCount([1, 8, 10, 21], 19));


// //exercice 2
// function hasSunsetView(array) {
//   let count = 0 ;
//   for (let i = 0; i < array.length; i++) {
//     let view = true;
//       for (let j = i + 1; j < array.length; j++) {
//           if (array[j] > array[i]) {
//               view = false;
//           }
//       }
//       if (view) {
//           count++;
//       }
//   }
//   return count;
// }
// console.log(hasSunsetView([3, 7, 8, 3, 6, 1]));
// console.log(hasSunsetView([1, 4, 5, 8]));


// exercice 3
// function sumOfParis(arr, target) {
//   let numIndex = {}; 
//   let difference;
//   for(let i=0; i<arr.length; i++) {
//     difference = target - arr[i]; 
//     if(numIndex[difference] !== undefined ) {
//       return true;
//     } else {
//       numIndex[arr[i]] = i;
      
//     }
//   }
//   return false;
// }

// console.log(sumOfParis([10, 15, 3, 7], 17));
// console.log(sumOfParis([1, 8, 10, 21], 19));

//exercice 4

// function hasSunsetView(array) {
//   let count = 0;
//   let currMax = array[0];
//   for (let i = 0; i < array.length; i++) {
//           if (array[i] <= currMax ) {
//               count++;
//               currMax = array[i];
//           }
//   }
//   return count;
// }

// console.log(hasSunsetView([ 3, 7, 8, 3, 6, 1]));
// console.log(hasSunsetView([ 1, 4, 5, 8]));

// // exercice 5
// function fifthExercice(number, data) {
//   let count = 0;
//   let left = 0;
//   let right = data.length - 1;
//   while (left < right) {
//       if (data[left] + data[right] === number) {
//           return true; 
//       } else if (data[left] + data[right] < number) {
//           left++;
//       } else {
//           right--;
//       }
//   count++;
//   }

//   return false;
// }

// console.log(fifthExercice(17, [10, 15, 3, 7]));
// console.log(fifthExercice(19, [1, 8, 10, 21]));



// // exercice 6
// function hasSunset(array) {
//   let biggest = 0;
//   let arr = array.slice();
//   return arr.reverse().filter((a) =>{
//     if (a > biggest) {
//       biggest = a;
//       return true
//     }
//   }).length;
// }


// console.log(hasSunset([ 3, 7, 8, 3, 6, 1]));
// console.log(hasSunset([ 1, 4, 5, 8]));


//merging

const { INSPECT_MAX_BYTES } = require('buffer');
const fs = require('fs');
const fileName = process.argv[2];

try {
  const data = fs.readFileSync(fileName, 'utf8');
  let array = data.split(' ').map(x => Number(x));

  let comparisons = 0;

  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
        comparisons++;
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }

  array = mergeSort(array);
  console.log(`Tri fusion: ${comparisons} comparaisons [${array}]`);

} catch (error) {
  console.error(error.message);
};