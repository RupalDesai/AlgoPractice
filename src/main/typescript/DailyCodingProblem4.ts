/*
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

function findMissingPostiveInteger(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        arr[i] = arr[arr[i] - 1];
        arr[temp - 1] = temp;
    }
    let index = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== -1) {
            if (index !== arr[i]) {
                return index;
            }
            index++;
        }
    }
    return index;

}

console.log(findMissingPostiveInteger([3, 4, -1, 1]));
console.log(findMissingPostiveInteger([1, 2, 0]));