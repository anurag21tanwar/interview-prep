function closestValueInBst(tree, target) {
    let currentNode = tree;
    let closestValue = currentNode.value;
    while(currentNode !== null) {
        if(Math.abs(target - closestValue) >
            Math.abs(target - currentNode.value)) {
            closestValue = currentNode.value;
        }

        if (target > currentNode.value) {
            currentNode = currentNode.right;
        } else if (target < currentNode.value) {
            currentNode = currentNode.left;
        } else {
            break;
        }
    }

    return closestValue;
}

// recursive

function recursiveWayToFindClosestValueInBst(tree, target) {
    return traverseBstAndFindClosestValue(tree, target, tree.value);
}

function traverseBstAndFindClosestValue(currentNode, target, closestValue) {
    if (currentNode === null) return closestValue;

    if (Math.abs(target - closestValue) >
        Math.abs(target - currentNode.value)) {
        closestValue = currentNode.value;
    }

    if (target > currentNode.value) {
        return traverseBstAndFindClosestValue(currentNode.right, target, closestValue);
    } else if (target < currentNode.value) {
        return traverseBstAndFindClosestValue(currentNode.left, target, closestValue);
    } else {
        return closestValue;
    }
}

