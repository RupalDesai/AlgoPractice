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
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }
    public get x() {
        return this.x;
    }
    public get y() {
        return this.y;
    }
}

function walkable(row: number, col: number, board: string[][]) {
    if (row < 0 || row > board[0].length) {
        return false;
    }
    if (col < 0 || col > board[0].length) {
        return false;
    }
    return board[row][col] === 'f' ? false : true;

}

function get_walkable_neighbours(cord: Coordinate, board: string[][]) {

    let neighbours = [
        new Coordinate(cord.x, cord.y - 1),
        new Coordinate(cord.x, cord.y + 1),
        new Coordinate(cord.x - 1, cord.y),
        new Coordinate(cord.x + 1, cord.y)];
    return neighbours.map((cord: Coordinate) => {
        if (walkable(cord.x, cord.y, board)) {
            return cord;
        }
    });

}

function minStepsRequired(start: Coordinate, end: Coordinate) {
    let visited: Map<Coordinate, boolean> = new Map();
    let board =
        [['f', 'f', 'f', 'f'],
        ['t', 't', 'f', 't'],
        ['f', 'f', 'f', 'f'],
        ['f', 'f', 'f', 'f']];

    let walkable_neighbour = get_walkable_neighbours(start, board)
}