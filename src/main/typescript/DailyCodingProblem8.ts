/*
This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

*/

class TreeNode {
	_val: number;
	_left: TreeNode;
	_right: TreeNode;
	constructor(val: number, left: TreeNode = null, right: TreeNode = null) {
		this._val = val;
		this._left = left;
		this._right = right;
	}
}


function isUniversalTree(root: TreeNode, count: number) {
	if (root === null) return false;
	if (root._left === null && root._right == null) { count++; return true; }

	if (isUniversalTree(root._left, count) && isUniversalTree(root._right, count)) {
		if (root._val === root._left._val && root._left._val === root._right._val) { count++; return true; }
	}
	return false;
}

let root: TreeNode = new TreeNode(0, new TreeNode(1), new TreeNode(0, new TreeNode(1, new TreeNode(1), new TreeNode(1)), new TreeNode(0)))
let count = 0;

isUniversalTree(root, count);
console.log(count);