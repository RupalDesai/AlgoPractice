/*
This problem was asked by Google.

Implement locking in a binary tree. A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.

Design a binary tree node class with the following methods:

    is_locked, which returns whether the node is locked
    lock, which attempts to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.
    unlock, which unlocks thffe node. If it cannot be unlocked, then it should return false. Otherwise, it should unlock it and return true.

You may augment the node to add parent pointers or any other property you would like. You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes. Each method should run in O(h), where h is the height of the tree
*/


class BinaryTree {
    public self;
    public parent: BinaryTree;
    public left: BinaryTree;
    public right: BinaryTree;
    public count_of_locked_descendents = 0;
    public is_locked = false;
    constructor(self: number, left: BinaryTree = null, right: BinaryTree = null, parent: BinaryTree = null) {
        this.self = self;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}




let tree = new BinaryTree(1);
tree.left = new BinaryTree(3);
tree.left.parent = tree;
tree.right = new BinaryTree(5);
tree.right.parent = tree;
tree.left.left = new BinaryTree(2);
tree.left.left.parent = tree.left;
tree.right.left = new BinaryTree(7);
tree.right.left.parent = tree.right;


function is_locked(node: BinaryTree) {
    return node.is_locked;
}

function lock(node: BinaryTree) {
    if (node.count_of_locked_descendents > 0) {
        return false;
    }

    let cur = node.parent;
    while (cur!=null) {
        if (is_locked(cur)) {
            return false;
        }
        cur=cur.parent;
    }
    node.is_locked = true;
    cur = node.parent;
    while (cur!=null) {
        cur.count_of_locked_descendents = cur.count_of_locked_descendents + 1;
        cur = cur.parent;
    }
    return true;
}


function un_lock(node: BinaryTree) {
    if (is_locked(node)) {
        node.is_locked = false;
        let cur = node.parent;
        while (cur!=null) {
            cur.count_of_locked_descendents = cur.count_of_locked_descendents - 1;
            cur = cur.parent;
        }
        return true;
    }
    return false;
}

console.log(lock(tree.left.left));
console.log(lock(tree.right.left));
console.log(lock(tree.left)); 
console.log(un_lock(tree.left));

console.log(is_locked(tree.left.left));
console.log(is_locked(tree.right.left));

console.log(un_lock(tree.left.left));
console.log(un_lock(tree.right.left));

console.log(is_locked(tree.left.left));
console.log(is_locked(tree.right.left));