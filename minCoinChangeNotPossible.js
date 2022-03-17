// main logic to follow is coin should be less than change+1

function minCoinChangeNotPossible(coins) {
    const sortedCoins = coins.sort((a, b) => a - b);
    let change = 0;
    for(let i=0; i<sortedCoins.length; i++) {
        if (sortedCoins[i] > change+1) {
            return change+1;
        }
        change += sortedCoins[i];
    }

    return change+1;
}

console.log(minCoinChangeNotPossible([1,2,5]));
console.log(minCoinChangeNotPossible([1,1,4]));
console.log(minCoinChangeNotPossible([2,3]));
