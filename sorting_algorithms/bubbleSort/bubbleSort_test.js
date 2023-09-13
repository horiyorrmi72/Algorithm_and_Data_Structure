const bubbleSort = require('./bubbleSort');

const myArray = [64, 34, 25, 12, 22, 11, 90];
const secondArray = [1,9,6,0,3,5,4];
bubbleSort(myArray, secondArray);
bubbleSort(secondArray);
console.log("Sorted array is:", myArray);
console.log("Sorted array2 is:", secondArray);