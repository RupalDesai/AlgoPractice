/*
Given the root to a binary tree, count the total number of nodes there are.
                 20
                /  \
                8  22
               / \
              4  12
                 / \
                10 14
                  /
                13
                */

class TreeNode {
    val: number;
    left: TreeNode;
    right: TreeNode;
    constructor(val: number, left: TreeNode = null, right: TreeNode = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function findCountOfNodes(node: TreeNode) {
    if (node === null) return 0;
    return 1 + findCountOfNodes(node.left) + findCountOfNodes(node.right);

}

let root: TreeNode = new TreeNode(20, new TreeNode(8, new TreeNode(4), new TreeNode(12, new TreeNode(10), new TreeNode(14, new TreeNode(13)))), new TreeNode(22));
console.log(findCountOfNodes(root));


function findDeepestNode(root: TreeNode): [TreeNode, number] {
    if (root.left === null && root.right === null) {
        return [root, 1];
    }
    if (root.left === null) {
        let right = findDeepestNode(root.right);
        return [right[0], ++right[1]]
    }
    if (root.right === null) {
        let left = findDeepestNode(root.left);
        return [left[0], ++left[1]]
    }
    else {
        let left = findDeepestNode(root.left);
        let right = findDeepestNode(root.right);

        return (left[1] >= right[1]) ? [left[0], ++left[1]] : [right[0], ++right[1]];
    }
}

console.log(findDeepestNode(root));
