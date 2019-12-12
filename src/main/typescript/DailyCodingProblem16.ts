/*
This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

    record(order_id): adds the order_id to the log
    get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.

You should be as efficient with time and space as possible.
*/
let orders: number[] = [];
function record(order_id) {
    if (orders.length < 10) {
        orders.push(order_id)
    } else {
        orders.shift();
        orders.push(order_id);
    }


}
function get_last(i) {
    return orders[i];
}

for (let i = 0; i < 15; i++) {
    record(i);
}

console.log(get_last(0));

console.log(orders);

/*
Solution for Java
In java we cant do shift
 */

let j = 0;
let orders2: number[] = Array(10);
function record2(order_id) {
    orders2[j % 10] = order_id;
    j++;
}

function get_last2(m) {
    return orders2[10-m-1];
}

for (let k = 0; k < 15; k++) {
    record2(k);
}
console.log(get_last2(0));

console.log(orders2);
