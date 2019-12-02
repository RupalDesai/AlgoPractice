/*
This problem was asked by Amazon.

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

    1, 1, 1, 1
    2, 1, 1
    1, 2, 1
    1, 1, 2
    2, 2

What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
*/


function nStepsProblem(n: number, x: number[]) {
    if (n < 0) {
        return 0;
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }

    let noOfWays = 0;
    for (let i = 0; i < x.length; i++) {
        noOfWays += nStepsProblem(n - x[i], x)
    }

    return noOfWays;
}


console.log(nStepsProblem(5, [1, 2]));

function nStepsProblem2(n: number, x: number[]) {
    let res: number[] = Array(n + 1).fill(0);
    res[0] = 1;
    res[1] = 1;
    res[2] = 2;

    for (let i = 3; i <= n; i++) {
        for (let j = 0; j < x.length; j++) {
            if (i - x[j] >= 0) {
                res[i] += res[i - x[j]];
            }
        }
    }

    return res[n];
}

console.log(nStepsProblem2(5, [1, 2]));


function nStepsProblem3(n: number, x: number[]) {
    let res: number[] = Array(x.length).fill(0);
    res[0] = 1;
    res[1] = 1;
    for (let i = 2; i <= n; i++) {
        let result = 0;
        for (let j = 0; j < x.length; j++) {
            if (i - x[j] >= 0) {
                result += res[(i - x[j]) % x.length];
            }
        }
        res[i % x.length] = result;
    }

    return res[x.length - 1];
}

console.log(nStepsProblem3(5, [2, 1]));