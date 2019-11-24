/*
This is your coding interview problem for today.

This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?

*/

function product(arr: number[]) {
    let output = Array(arr.length);
    let left = Array(arr.length).fill(1);
    let right = Array(arr.length).fill(1);
    for (let i = 1; i < arr.length; i++) {
        left[i] = left[i - 1] * arr[i - 1];
    }
    for (let i = arr.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * arr[i + 1];
    }
    for (let i = 0; i < arr.length; i++) {
        output[i] = left[i] * right[i];
    }
    console.log(output);
}
product([1, 2, 3, 4, 5]);
product([3, 2, 1]);