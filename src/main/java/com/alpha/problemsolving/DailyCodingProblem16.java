package com.alpha.problemsolving;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

/*
This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

    record(order_id): adds the order_id to the log
    get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.

You should be as efficient with time and space as possible.
*/
public class DailyCodingProblem16 {
    public static void main(String args[]) {
        LRUCache lruCache = new LRUCache(5);
        for (int i = 1; i <= 7; i++) {
            lruCache.record(i);
        }
        System.out.println(lruCache.get_last(0));
        System.out.println(lruCache.get_last(3));
        //Should be 4
         System.out.println(lruCache.get_last(0));
         //Should be 5
         System.out.println(lruCache.get_last(3));
    }

    final static class LRUCache {
        private int maxCapacity;
        private Map<Integer, Node> mapOfNodes;
        private Integer countOfNodes;
        private Node head;
        private Node last;

        public LRUCache(int maxCapacity) {
            this.mapOfNodes = new HashMap<>();
            this.maxCapacity = maxCapacity;
            this.countOfNodes = 0;
        }

        final class Node {
            Integer order_id;
            Node prev;
            Node next;

            public Node(Integer order_id) {
                this.order_id = order_id;
            }
        }

        public void record(Integer order_id) {
            Node node = new Node(order_id);
            if (mapOfNodes.isEmpty()) {
                head = node;
                last = node;
            } else if (countOfNodes >= maxCapacity) {
                Node temp = head;
                head = head.next;
                head.prev = null;
                temp.next = null;
            }
            node.prev = last;
            last.next = node;
            last = node;
            this.mapOfNodes.put(++countOfNodes % maxCapacity, node);
        }

        public int get_last(int index) {
            Node node = this.mapOfNodes.get((countOfNodes - index) % maxCapacity);
            if (index == 0) {
                return node.order_id;
            }

            node.prev.next = node.next;
            node.next.prev = node.prev;
            this.record(node.order_id);
            node.next = null;
            node.prev = null;
            return node.order_id;
        }
    }

    public static final LRUCache2
    {
        private lruCache;
     LRUCache2(final int maxSize) {
     lruccahe=new LinkedHashMap<K, V>(maxSize*4/3, 0.75f, true) {
        @Override
        protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
            return size() > maxSize;
        }
    };
}
    }

}