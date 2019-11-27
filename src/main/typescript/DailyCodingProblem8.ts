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


function countUniversalTreeNodes(root: TreeNode): [boolean, number] {
    if (root === null) return [true, 0];
    //count universal nodes on left
    const [is_left_unival, left_count] = countUniversalTreeNodes(root._left);
    //count universal nodes on right
    const [is_right_unival, right_count] = countUniversalTreeNodes(root._right);
    //If both left and right trees are universal
    if (is_left_unival && is_right_unival) {
        //If left val is not equal to root val then retrun false
        if (root._left != null && root._left._val != root._val) {
            return [false, left_count + right_count];
        }
        if (root._right != null && root._right._val != root._val) {
            return [false, left_count + right_count];
        }
        /*
        This is not needed as one of above will true if root._left._val != root._right._val
        if (root._left._val != root._right._val) {
        return [false, left_count + right_count];}
                */
        return [true, left_count + right_count + 1]
    }
    return [false, left_count + right_count];
}

let root: TreeNode = new TreeNode(0, new TreeNode(1), new TreeNode(0, new TreeNode(1, new TreeNode(1), new TreeNode(1)), new TreeNode(0)))

console.log(countUniversalTreeNodes(root));
/*
   1
  / \
 1   1
    / \
   1   1
      / \
     1   0


*/

root = new TreeNode(1, new TreeNode(1, new TreeNode(1), new TreeNode(1,new TreeNode(1), new TreeNode(0))), new TreeNode(1));

console.log(countUniversalTreeNodes(root));