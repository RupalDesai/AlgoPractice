/*
This problem was asked by Facebook.

A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal.
*/

function findMin(arr, last_house_color) {
    let min = [9999, -1];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (i != last_house_color) {
            let v = arr[i];
            min = (v < min[0]) ? [v, i] : min;
        }
    }

    return min;
}

function min_cost(no_of_houses: number, no_of_colors: number, cost: number[][]) {
    //Track the total cost of painting first house iwth each color
    let total_cost = [...cost[0]];
    //Track the color of each house
    let last_house_color = [0, 1, 2];
    for (let i = 1; i < no_of_houses; i++) {
        for (let j = 0; j < no_of_colors; j++) {
            //Find the minimum 
            let min = findMin(cost[i], last_house_color[j]);
            total_cost[j] += min[0];
            last_house_color[j] = min[1];

        }
    }

    let min = total_cost[0];
    for (let i = 1, len = total_cost.length; i < len; i++) {
        let v = total_cost[i];
        min = (v < min) ? v : min;
    }

    console.log('Minimum cost is ', min);
}
let cost = [[2, 5, 3],
[1, 6, 2],
[2, 7, 1],
[4, 3, 3]]

min_cost(4, 3, cost);

cost = [[2, 5, 3], [100, 6, 2], [200, 70, 1]]
min_cost(3, 3, cost);