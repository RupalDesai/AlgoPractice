/*
Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.

canBalance([1, 1, 1, 2, 1]) → true
canBalance([2, 1, 1, 2, 1]) → false
canBalance([10, 10]) → true
*/

function canBalance(arr: number[]) {
    let i = 0, j = arr.length - 2;
    let leftSum = arr[0], rightSum = arr[arr.length - 1];
    while (i < j) {
        if (leftSum < rightSum) {
            leftSum += arr[++i];
        } else {
            rightSum += arr[j];
            j--;
        }

    }
    let res = leftSum === rightSum ? true : false;
    console.log(res, leftSum, rightSum);
}

canBalance([1, 1, 1, 2, 1]);
canBalance([2, 1, 1, 2, 1]);
canBalance([10, 10]);