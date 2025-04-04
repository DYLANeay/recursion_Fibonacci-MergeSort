const mergeSortRecursive = (arr) => {
  if (arr.length <= 1) {
    return arr; // already sorted if less than or equals to 1 element
  }

  // split the array in two half
  const middleBaseArray = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middleBaseArray);
  const rightHalf = arr.slice(middleBaseArray, arr.length);

  // split recursively the array
  const sortedLeft = mergeSortRecursive(leftHalf);
  const sortedRight = mergeSortRecursive(rightHalf);

  // return the array sorted
  return merge(sortedLeft, sortedRight);
};

const merge = (arrayLeft, arrayRight) => {
  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < arrayLeft.length && rightIndex < arrayRight.length) {
    if (arrayLeft[leftIndex] < arrayRight[rightIndex]) {
      mergedArray.push(arrayLeft[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(arrayRight[rightIndex]);
      rightIndex++;
    }
  }

  // add any remaining elements (exemple two big numbers in only an array )
  while (leftIndex < arrayLeft.length) {
    mergedArray.push(arrayLeft[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < arrayRight.length) {
    mergedArray.push(arrayRight[rightIndex]);
    rightIndex++;
  }

  return mergedArray;
};

const array1 = [3, 2, 1, 13, 8, 5, 0, 1];
const sortedArray1 = mergeSortRecursive(array1);
console.log(sortedArray1); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
