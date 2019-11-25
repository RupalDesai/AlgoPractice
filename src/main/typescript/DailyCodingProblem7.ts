/*
This is your coding interview problem for today.

This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/
function noOfWaysToDecode(n: number, map: Map<number,number>) {
    if (n <= 9)
        return 1;
    else if (map.get(n)) {
        return map.get(n);
    } else {
        if (n % 100 < 27) {
            let res = noOfWaysToDecode(Math.floor(n / 10), map) + noOfWaysToDecode(Math.floor(n / 100), map);
            map.set(n, res);
            return res;
        }
        else {
            let res = noOfWaysToDecode(Math.floor(n / 10), map) + 1;
            map.set(n, res);
            return res;
        }
    }
}

console.log(noOfWaysToDecode(111, new Map()));
console.log(noOfWaysToDecode(121, new Map()));
console.log(noOfWaysToDecode(1234, new Map()));
console.log(noOfWaysToDecode(12345, new Map()));
console.log(noOfWaysToDecode(11111, new Map()));
