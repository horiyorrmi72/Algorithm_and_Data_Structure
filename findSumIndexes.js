/* Given an array of integers nums and an integer target return index of the two numbers such that they add up to target
 * 
 * @param {*} arr 
 * @param {*} target 
 * @returns index of two numbers in an array [i,j]
 * link to page on linkedin to find task : [https://www.linkedin.com/feed/update/urn:li:activity:7107796715566432256/]
 * returns index of the first two numbers in an array that sums to target.
 */
function testAlgo(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return -1;
}

let myArray = [1,2,3,4,5,6,7];
let target  = 9;
let result = testAlgo(myArray, target);

if(result !== -1){
    console.log(`the sum indexes are ${result}`);
}else{
    console.log(`sum of target not found.`);
}