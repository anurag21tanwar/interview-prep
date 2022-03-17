// tricky because of presence of negatives numbers
// main logic to follow is to maintain two pointers, one from start and one from end and check abs values

function sortedSquared(array) {
    const tempArr = [];
    let inputArrStartIdx = 0;
    let inputArrEndIdx = array.length - 1;
    let tempArrEndIdx = inputArrEndIdx;

    while(tempArrEndIdx > -1) {
        if (Math.abs(array[inputArrStartIdx]) > Math.abs(array[inputArrEndIdx])) {
            tempArr[tempArrEndIdx] = array[inputArrStartIdx] * array[inputArrStartIdx];
            inputArrStartIdx += 1;
        } else {
            tempArr[tempArrEndIdx] = array[inputArrEndIdx] * array[inputArrEndIdx];
            inputArrEndIdx -= 1;
        }

        tempArrEndIdx -= 1;
    }

    return tempArr;
}

console.log(sortedSquared([-4, -1, 2]));
