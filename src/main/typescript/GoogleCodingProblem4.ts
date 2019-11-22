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

function triplet(arr: number[], k: number) {
    for (let i = 0; i < arr.length - 2; i++) {
        let first = arr[i];
        let res = findPair([...arr].splice(i), k - first);
        if (res) {
            console.log(first, ...res)
        }
    }

}

triplet([10, 15, 3, 7, 7], 17);
console.log(...findPair([10, 15, 3, 7], 17));