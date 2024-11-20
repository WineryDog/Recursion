const oneElArray = [7];
const baseArray = [3, 2];
const trioArray = [3, 7, 2];
const testArray = [3, 9, 5, 8, 2, 4, 6];

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const l = 0;
  const mid = Math.floor(array.length / 2);
  const arrayLeft = array.slice(l, mid);
  const arrayRight = array.slice(mid);

  return mergeArrays(mergeSort(arrayLeft), mergeSort(arrayRight));
}

function mergeArrays(arrayL, arrayR) {
  let mergerdArray = [];

  let i = 0;
  let j = 0;

  while (arrayL.length > i && arrayR.length > j) {
    if (arrayL[i] < arrayR[j]) {
      mergerdArray.push(arrayL[i++]);
    } else {
      mergerdArray.push(arrayR[j++]);
    }
  }

  while (arrayL.length > i) {
    mergerdArray.push(arrayL[i++]);
  }

  while (arrayR.length > j) {
    mergerdArray.push(arrayR[j++]);
  }

  return mergerdArray;
}

console.log(mergeSort([])); // returns []
console.log(mergeSort(oneElArray)); // returns [7]
console.log(mergeSort(baseArray)); // returns [2, 3]
console.log(mergeSort(trioArray)); // returns [2, 3, 7]
console.log(mergeSort(testArray)); // returns [2, 3, 4, 5, 6, 8, 9]
