/*
Consider the leftmost and righmost appearances of some value in an array.
We'll say that the "span" is the number of elements between the two inclusive. A single value has a span of 1.
Returns the largest span found in the given array. (Efficiency is not a priority.)

maxSpan([1, 2, 1, 1, 3]) → 4
maxSpan([1, 2, 4, 1, 4, 1, 4]) → 6
maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6
*/

// Another Solution
function maxSpan2(arr: number[]) {
    let lowerIndexMap = new Map();
    let maxSpan = 0;
    for (let i = 0; i < arr.length; i++) {
        if (lowerIndexMap.has(arr[i])) {
            maxSpan = Math.max(maxSpan, i - lowerIndexMap.get(arr[i]) + 1);
        } else {
            lowerIndexMap.set(arr[i], i)
        }
    }

    console.log(maxSpan);
}

function maxSpan(ele: number[]) {
    let memory = new Array<number>(ele.length);
    let maxSpan = 0;
    ele.forEach((item, index) => {
        if (memory[item] === undefined) {
            memory[item] = index;
        }
        else {
            if (index - memory[item] + 1 > maxSpan) {
                maxSpan = index - memory[item] + 1;
            }
        }
    });
    console.log(maxSpan);
}

maxSpan([1, 2, 1, 1, 3]);
maxSpan([1, 2, 4, 1, 4, 1, 4]);
maxSpan([1, 4, 2, 1, 4, 4, 4]);
