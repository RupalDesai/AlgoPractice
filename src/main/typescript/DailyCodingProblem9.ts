/*
This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?

*/

function largestSumOfNonAdjacentNumbers(arr: number[]) {
    const n = arr.length;
    if (n === 0) return 0;
    if (n === 1) return arr[0];
    else if (n === 2) return Math.max(arr[0], arr[1]);
    //Find max of arr[0]+ arr[1..n], arr[1]+arr[2...n]
    console.log(Array.from(arr).splice(2, n), Array.from(arr).splice(3, n));
    let res1 = largestSumOfNonAdjacentNumbers(Array.from(arr).splice(2, n));
    let res2 = largestSumOfNonAdjacentNumbers(Array.from(arr).splice(3, n));
    return Math.max(
        arr[0] + res1, res1,
        arr[1] + res2, res2);

}

console.log(largestSumOfNonAdjacentNumbers([2, 4, 6, 2, 5, 2, 4, 6, 2, 5, 2, 4, 6, 2, 5]));
//console.log(largestSumOfNonAdjacentNumbers([5, 1, 1, 5]));
