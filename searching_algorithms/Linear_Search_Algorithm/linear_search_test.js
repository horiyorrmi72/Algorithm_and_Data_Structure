const linearSearch = require("./linearSearch.js");

let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 0;
let result = linearSearch(myArray, target);

if (result != -1) {
  console.log(`target: ${target} found at index ${result}`);
} else {
  console.log(`target: ${target} not found in the list`);
}
