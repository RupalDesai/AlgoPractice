/*
This problem was asked by Facebook.

Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.

Explanation:

Assume there are i number of elements. Pick 1 number from i number of elements.

Probability of picking 1 number from i elements is 1/i

From i+1 to end of streamc(n)

generate a random number and check if its 1. if its 1 replace previous random element with stream[i]

probality of picking i+1 number is 1/(i+1) probability of not picking i+1 number is 1-1/(i+1)

So probability of picking a random number and not replacing with new number is (1/i)*(1-1(i+1))*(1-1/(i+2))........1-1/n= (i/i)(i/i+1)*(i+1)/(i+2)---(n-1)/n=1/n
*/


let stream: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function findRandomInt(n) {
    return Math.floor(Math.random() * n);
}

function pickRandomElement() {
    let i = 0;
    let randomElement = stream[i];

    for (i = 1; i < stream.length; i++) {
        let randomInt = findRandomInt(i);
        if (randomInt === 1) {
            randomElement = stream[i];
        }
    }
    return randomElement;
}

console.log(pickRandomElement());


function pickRandomKElements(k) {

    let randomElements = [];
    for (let i = 0; i < k; i++) {
        randomElements.push(stream[i]);
    }

    for (let i = k + 1; i < stream.length; i++) {
        let randomInt = findRandomInt(i);
        if (randomInt < randomElements.length) {
            randomElements[randomInt] = stream[i];
        }
    }
    return randomElements;
}

console.log(pickRandomKElements(3));