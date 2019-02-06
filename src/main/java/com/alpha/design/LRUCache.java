package com.alpha.design;

/*
LRU Cache Implementation
We are given total possible page numbers that can be referred.
 We are also given cache (or memory) size (Number of page frames that cache can hold at a time).
 The LRU caching scheme is to remove the least recently used frame when the cache is full and
  a new page is referenced which is not there in cache. Please see the Galvin book for more details
  (see the LRU page replacement slide here).
  Asked In:Amazon,Adobe,GoldmanSachs
*/
import java.util.HashMap;
import java.util.Map;

public class LRUCache {
    Map<Integer, Node> mapOfNodes;
    Node lastNode;
    Node firstNode;
    int maxCapacity;

    LRUCache(int capacity) {
        this.mapOfNodes = new HashMap<>();
        this.maxCapacity = capacity;
    }

    private void setHead(Node n1) {
        if (firstNode == null) {
            firstNode = n1;
        } else {
            firstNode.prev = n1;
            n1.next = firstNode;
            firstNode = n1;
        }
        if (lastNode == null) {
            lastNode = n1;
        }
    }

    public void remove(Node n) {
        if (n.prev != null) {
            n.prev.next = n.next;
        } else {
            firstNode = n.next;
        }

        if (n.next != null) {
            n.next.prev = n.prev;
        } else {
            lastNode = n.prev;
        }

    }

    void set(int key, int value) {
        Node n1 = new Node(value, key);
        if (mapOfNodes.containsKey(key)) {
            Node alreadyNode = mapOfNodes.get(key);
            remove(alreadyNode);
            setHead(n1);
            mapOfNodes.put(key, n1);
        } else {
            if (mapOfNodes.size() == maxCapacity) {
                mapOfNodes.remove(lastNode.key);
                remove(lastNode);
                setHead(n1);

            } else {
                setHead(n1);

            }
            mapOfNodes.put(key, n1);
        }
    }

    Integer get(int key) {
        if (mapOfNodes.containsKey(key)) {
            return mapOfNodes.get(key).value;
        }
        return null;
    }

    public static void main(String[] args) {
        LRUCache lru = new LRUCache(2);
        lru.set(1, 4);
        lru.set(2, 5);
        lru.get(1);
        lru.set(3, 6);
    }

}

class Node {
    int value;
    int key;
    Node prev;
    Node next;

    public Node(int value, int key) {
        super();
        this.value = value;
        this.key = key;
    }

}