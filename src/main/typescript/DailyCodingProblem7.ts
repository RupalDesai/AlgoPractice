/*
This is your coding interview problem for today.

This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/


function noOfWaysToDecode(n: number) {
    if (n <= 9)
        return 1;
    else {
        if (n % 100 < 27) {
            return noOfWaysToDecode(Math.floor(n / 10)) + noOfWaysToDecode(Math.floor(n / 100));
        }
        else {
            return noOfWaysToDecode(Math.floor(n / 10)) + 1;
        }
    }
}

console.log(noOfWaysToDecode(111));
console.log(noOfWaysToDecode(121));
console.log(noOfWaysToDecode(1234));
console.log(noOfWaysToDecode(12345));
console.log(noOfWaysToDecode(11111));



