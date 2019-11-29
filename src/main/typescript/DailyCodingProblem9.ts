
/*
This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?

[2, 4, 6, 2, 5]


*/
// This takes O(2^n) time
function largestSumOfNonAdjacentNumbers(arr: number[]) {
    const n = arr.length;
    if (n === 0) return 0;
    if (n === 1) return arr[0];
    else if (n === 2) return Math.max(arr[0], arr[1]);
    //Find max of arr[0]+ arr[1..n], arr[1]+arr[2...n]
    let res1 = largestSumOfNonAdjacentNumbers(Array.from(arr).splice(2, n));
    let res2 = largestSumOfNonAdjacentNumbers(Array.from(arr).splice(3, n));
    return Math.max(
        arr[0] + res1, res1,
        arr[1] + res2, res2);

}

console.log(largestSumOfNonAdjacentNumbers([2, 4, 6, 2, 5, 2, 4, 6, 2, 5, 2, 4, 6, 2, 5]));
console.log(largestSumOfNonAdjacentNumbers([5, 1, 1, 5]));

/*

Solution in O(n) time and 0(n) time
 [2, 4, 6, 2, 5]
         cache[0]=2
         cache[1]=max(2,4)=4;
         cache[2]=max(cache[0]+cache[2],cache[1])=max(2+6,4)=8
         cache[3]=max(cache[1]+cache[3],cache[2])=max(4+2,8)=8
         cache[4]=max(cache[2]+cache[4],cache[3])=max(8+5,8)=13

*/

function largestSumOfNonAdjacentNumbers2(arr: number[]) {
    let cache = Array(arr.length);
    if (arr.length === 0) {
        return arr[0];
    }
    if (arr.length === 1) {
        return arr[1];
    }
    if (arr.length === 2) {
        return Math.max(arr[0], arr[1]);
    }
    cache[0] = arr[0]
    cache[1] = Math.max(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        cache[i] = Math.max(cache[i - 1], cache[i - 2] + arr[i]);
    }
    return cache[arr.length - 1];
}


console.log(largestSumOfNonAdjacentNumbers2([2, 4, 6, 2, 5, 2, 4, 6, 2, 5, 2, 4, 6, 2, 5]));
console.log(largestSumOfNonAdjacentNumbers2([5, 1, 1, 5]));

/*
constant space
       [2, 4, 6, 2, 5]
         cache[0]=2
         cache[1]=max(2,4)=4;
         cache[2]=max(cache[0]+cache[2],cache[1])=max(2+6,4)=8
         cache[3]=max(cache[1]+cache[3],cache[2])=max(4+2,8)=8
         cache[4]=max(cache[2]+cache[4],cache[3])=max(8+5,8)=13


Here only the previous 2 calculations are needed every time
  
 [2, 4, 6, 2, 5]

when length :0 return arr[0]=2
when length :1 return max(arr[0],arr[1])=4

when length :2
cache0=arr[0]+arr[2]=2+6=8
cache1=arr[1]=4
temp=cache1;
cache1=max(cache0,cache1)=max(4,8)=8;
cache0=temp;
return cache1;
*/

function largestSumOfNonAdjacentNumbers3(arr: number[]) {
    if (arr.length === 0) {
        return arr[0];
    }
    if (arr.length === 1) {
        return arr[1];
    }
    if (arr.length === 2) {
        return Math.max(arr[0], arr[1]);
    }
    let cache0 = arr[0];
    let cache1 = Math.max(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
        let temp = cache1;
        cache1 = Math.max(cache0 + arr[i], cache1);
        cache0 = temp;
    }
    return cache1;
}

console.log(largestSumOfNonAdjacentNumbers3([2, 4, 6, 2, 5, 2, 4, 6, 2, 5, 2, 4, 6, 2, 5]));
console.log(largestSumOfNonAdjacentNumbers3([5, 1, 1, 5]));

