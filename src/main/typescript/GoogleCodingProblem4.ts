/*
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

function findPair(arr: number[], k: number) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i])) {
            return [k - arr[i], arr[i]];
        }
        map.set(k - arr[i], true);
    }
}

console.log(findPair([10, 15, 3, 7], 17));