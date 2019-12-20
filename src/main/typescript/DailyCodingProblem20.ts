/*
This problem was asked by Google.

Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 5 -> 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.
*/

class LinkedListNode {
    private val;
    public next: LinkedListNode;

    constructor(val: number, next: LinkedListNode = null) {
        this.val = val;
        this.next = next;
    }
}



let list1 = new LinkedListNode(5, new LinkedListNode(3, new LinkedListNode(7, new LinkedListNode(8, new LinkedListNode(10)))));

let list2 = new LinkedListNode(99, new LinkedListNode(1, new LinkedListNode(8, new LinkedListNode(10))));

function findIntersectingNode(list1, list2) {
    //find the difference between the length of the two lists
    let diff = 1;
    let i = 0;
    while (i < diff) {
        list1 = list1.next;
        i++;
    }

    while (list1.next != null && list1.val != list2.val) {
        list1 = list1.next;
        list2 = list2.next;
    }

    if (list1 != null) {
        console.log('Intersecting node is', list1.val);
    }
}

findIntersectingNode(list1, list2);