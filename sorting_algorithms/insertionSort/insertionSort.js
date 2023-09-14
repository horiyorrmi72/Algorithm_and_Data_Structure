function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentValue = arr[i];
        let j = i - 1;
        while(j >= 0 && currentValue < arr[j]){
            [arr[j],arr[j + 1]] = [arr[j + 1],arr[j]];
            j--;
        }
        arr[j + 1] = currentValue;
    }
}

module.exports = insertionSort;