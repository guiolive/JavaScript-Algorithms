function binaryRecursive(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {

    if (leftIndex > rightIndex) {
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
        return middleIndex;
    }

    if(target < arr[]){
        middleIndex
    }


}

console.log(binaryRecursive([5, 2, 4, 10, 1]), 1) // 4