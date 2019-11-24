/*
This is your coding interview problem for today.

This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
*/
let serializedTreeString: string = '';
let counter = 0;
class BinaryTreeNode {
    _val: number;
    _left: BinaryTreeNode;
    _right: BinaryTreeNode;
    constructor(val: number, left: BinaryTreeNode = null, right: BinaryTreeNode = null) {
        this._val = val;
        this._left = left;
        this._right = right;

    }
}


function serialize(current: BinaryTreeNode) {
    if (current === null) {
        return '-1';
    } else {
        return `${current._val},${serialize(current._left)},${serialize(current._right)}`;
    }

}

function _deserialize(serializedTree: number[]) {
    let val = serializedTree.shift();
    if (val === -1) {
        return null;
    }
    let node = new BinaryTreeNode(val);
    node._left = _deserialize(serializedTree);
    node._right = _deserialize(serializedTree);
    return node;
}

function deserialize(serializedTreeString: string) {
    console.log(_deserialize(serializedTreeString.split(',').map(val => Number(val))));
}

let root: BinaryTreeNode = new BinaryTreeNode(20, new BinaryTreeNode(8, new BinaryTreeNode(4), new BinaryTreeNode(12, new BinaryTreeNode(10), new BinaryTreeNode(14))), new BinaryTreeNode(22));
console.log(serialize(root));
deserialize('20,8,4,-1,-1,12,10,-1,-1,14,-1,-1,22,-1,-1');