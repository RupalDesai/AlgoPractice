package com.alpha.problemsolving;

/*
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

class DailyCodingProblem8 {

    public static void main(String args[]) {

        BinaryTree tree = new BinaryTree();
        tree.root = new Node(0, new Node(1), new Node(0, new Node(1, new Node(1), new Node(1)), new Node(0)));

        int res = tree.countUnivalTrees(tree.root);
        System.out.println(res);

        /*
              5
             / \
            4   5
           / \   \
          4   4   5

        */

        tree = new BinaryTree();
        tree.root = new Node(5);
        tree.root.left = new Node(4);
        tree.root.right = new Node(5);
        tree.root.left.left = new Node(4);
        tree.root.left.right = new Node(4);
        tree.root.right.right = new Node(5);
        res = tree.countUnivalTrees(tree.root);
        System.out.println(res);

    }

}

class Node {
    public int value;
    public Node left, right;

    Node(int value, Node left, Node right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    Node(int value) {
        this.value = value;
        this.left = this.right = null;
    }
}

class BinaryTree {
    Node root;

    int countUnivalTrees(Node root) {
        if (root == null) {
            return 0;
        }
        int count = countUnivalTrees(root.left) + countUnivalTrees(root.right);
        if (root.left != null && root.value != root.left.value) {
            return count;
        }

        if (root.right != null && root.value != root.right.value) {
            return count;
        }

        // if whole tree is unival tree
        return count + 1;
    }

}