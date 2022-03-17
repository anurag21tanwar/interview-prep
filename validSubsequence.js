// main logic to follow is to maintain two pointers

function isValidSubsequence(array, sequence) {
    const arrLen = array.length;
    const seqLen = sequence.length;
    let arrInx = 0;
    let seqInx = 0;

    while(arrInx < arrLen && seqInx < seqLen) {
        if (array[arrInx] === sequence[seqInx]) {
            seqInx += 1;
        }
        arrInx += 1;
    }

    return seqInx === seqLen;
}

console.log(isValidSubsequence([1,2,3,4,5], [2,4,5]))
