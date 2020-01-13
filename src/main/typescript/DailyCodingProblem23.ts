/*
This problem was asked by Google.

You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

For example, given the following board:

[[f, f, f, f],
[t, t, f, t],
[f, f, f, f],
[f, f, f, f]]

and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7, since we would need to go through (1, 2) because there is a wall everywhere else on the second row.
*/

class Coordinate {
    public x: number;
    public y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public equals(coord: Coordinate) {
        return this.x === coord.x && this.y === coord.y;
    }
}

function walkable(coord: Coordinate, board: string[][]) {
    if (coord.x < 0 || coord.x > board.length - 1) {
        return false;
    }
    if (coord.y < 0 || coord.y > board[0].length - 1) {
        return false;
    }
    return board[coord.x][coord.y] === 'f' ? true : false;

}

function get_walkable_neighbours(coord: Coordinate, board: string[][]) {

    let neighbours = [
        new Coordinate(coord.x, coord.y - 1),
        new Coordinate(coord.x, coord.y + 1),
        new Coordinate(coord.x - 1, coord.y),
        new Coordinate(coord.x + 1, coord.y)];
    return neighbours.filter((coord: Coordinate) => walkable(coord, board));

}

function minimun_steps_required(start: Coordinate, end: Coordinate, visited, board: string[][]) {

    let queue: [[Coordinate, number]] = [[start, 0]];
    visited[start.x][start.y] = true;

    while (queue.length > 0) {

        //console.log(queue);
        let [coord, count] = queue.shift();
       
        visited[coord.x][coord.y] = true;
        let walkable_neighbours = get_walkable_neighbours(coord, board).filter(coord => !visited[coord.x][coord.y]);
        for (let i = 0; i < walkable_neighbours.length; i++) {
            console.log(coord,walkable_neighbours[i], count + 1);
            queue.push([walkable_neighbours[i], count + 1]);

        }
    }

}
function get_minimun_steps_required(start: Coordinate, end: Coordinate) {
    let board =
        [['f', 'f', 'f', 'f'],
        ['t', 't', 'f', 't'],
        ['f', 'f', 'f', 'f'],
        ['f', 'f', 'f', 'f']];

    let visited = new Array(board.length).fill(false);
    for (let i = 0; i < board.length; i++) {
        visited[i] = new Array(board[0].length).fill(false);;
    }

    console.log(minimun_steps_required(start, end, visited, board));
}
get_minimun_steps_required(new Coordinate(3, 0), new Coordinate(0, 0));