// main logic to follow is x+y=target

function twoNumberSum(array, targetSum) {
    const hashMap = {};

    for(let i=0; i<array.length; i++) {
        if (hashMap[array[i]] !== undefined) {
            return [hashMap[array[i]], array[i]];
        } else {
            hashMap[targetSum - array[i]] = array[i];
        }
    }

    return [];
}

console.log(twoNumberSum([1,2,-1,3,4], 0));
