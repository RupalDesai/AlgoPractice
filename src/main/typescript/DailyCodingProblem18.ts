/*This problem was asked by Google.

Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

    10 = max(10, 5, 2)
    7 = max(5, 2, 7)
    8 = max(2, 7, 8)
    8 = max(7, 8, 7)

Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them
*/


function maxSubArray(array: number[], k: number) {

    let queue = [];

    // From i=0 to k push the element indexs in a array. If the current element is greater than the elements in the queue, pop the previous elements
    // This way only the most relavent element indexes are maintained in the queue
    for (let i = 0; i < k; i++) {
        for (let j = queue.length - 1; j >= 0; j--) {
            if (array[i] > array[queue[j]]) {
                queue.pop();
            }
        }
        queue.push(i);
    }
    for (let i = k; i < array.length; i++) {
        let index = queue[0];
        console.log(array[index]);
        if (index <= i - k) {
            queue.shift();
        }
        for (let j = queue.length - 1; j >= 0; j--) {
            if (array[i] > array[queue[j]]) {
                queue.pop();
            }
        }
        queue.push(i);
    }
    console.log(array[queue[0]]);
}

maxSubArray([10, 5, 2, 7, 8, 7], 3);
