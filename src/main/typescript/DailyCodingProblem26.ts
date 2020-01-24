/*
This problem was asked by Google.

Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.*/



class LinkedList {
    node: number;
    next: LinkedList;
    constructor(node: number, next: LinkedList = null) {
        this.node = node;
        this.next = next;
    }
}

function removeNthFromEnd(head: LinkedList, k: number) {

    let fast = head;
    let slow = head;
    let prev = null;
    for (let i = 0; (fast.next !== null && i < k); i++) {
        fast = fast.next;
    }
    while (fast.next !== null) {

        fast = fast.next;
        prev = slow;
        slow = slow.next;
    }
    // when we have remove the first element
    if (prev === null) {
        head = head.next;
    }
    else {
        prev.next = slow.next;
    }

    return head;

}

let linkedList = new LinkedList(1, new LinkedList(2, new LinkedList(3, new LinkedList(4, new LinkedList(5)))));

console.log(removeNthFromEnd(linkedList, 2));
console.log(removeNthFromEnd(linkedList, 3));