const binarySearch  =  require ('./binary_search.js');

let testArr = [1,2,3,4,5,6,7,8,9];
let target = 9;
let result = binarySearch(testArr, target);

if (result !== -1) {
    console.log(`Element ${target} found at index ${result}`);
} else {
    console.log(`Element ${target} not found in the array`);
}