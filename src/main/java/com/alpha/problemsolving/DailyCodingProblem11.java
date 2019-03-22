package com.alpha.problemsolving;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.TreeMap;

/*
This problem was asked by Twitter.
Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.
For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
Explanation: https://codereview.stackexchange.com/questions/215813
*/

class DailyCodingProble11 {

    public static void main(String args[]) {

        String[] words = { "dog", "dee", "deer", "deal" };
        Trie trie = new Trie();
        for (String word : words) {
            trie.insert(word);
        }
        trie.search("de", trie.root, 0).forEach(word -> System.out.println(word));
        trie.search("do", trie.root, 0).forEach(word -> System.out.println(word));

        Trie2 trie2 = new Trie2(Arrays.asList(words));
        trie2.search("de").forEach(word -> System.out.println(word));
        trie2.search("do").forEach(word -> System.out.println(word));

    }
}

class TrieNode {
    public Character content;
    public TrieNode[] children = new TrieNode[26];
    public boolean isWord;

    TrieNode(Character ch) {
        this.content = ch;
    }
}

class Trie {
    TrieNode root;

    Trie() {
        root = new TrieNode('*');
    }

    public void insert(String word) {
        TrieNode currentNode = root;
        for (int i = 0; i < word.length(); i++) {
            Character ch = word.charAt(i);
            if (currentNode.children[ch - 'a'] == null) {
                currentNode.children[ch - 'a'] = new TrieNode(ch);
            }
            currentNode = currentNode.children[ch - 'a'];

        }
        currentNode.isWord = true;
    }

    public List<String> search(String searchTxt, TrieNode currentNode, int index) {
        Character ch = searchTxt.charAt(index);
        if (currentNode.children[ch - 'a'] == null) {
            return null;
        }
        currentNode = currentNode.children[ch - 'a'];
        if (index == searchTxt.length() - 1) {
            List<String> results = new ArrayList<>();
            findWords(currentNode, new StringBuilder(searchTxt), results);
            return results;
        }
        return search(searchTxt, currentNode, ++index);
    }

    public void findWords(TrieNode currentNode, StringBuilder sb, List<String> results) {

        for (TrieNode child : currentNode.children) {
            if (child != null) {
                if (child.isWord == true) {
                    results.add(new StringBuilder(sb).append(child.content).toString());
                }
                findWords(child, new StringBuilder(sb).append(child.content), results);
            }
        }
    }
}

// Imporved solution
class Trie2 {
    private class TrieNode2 extends TreeMap<Character, TrieNode2> {
        public static final long serialVersionUID = 1L;
        public boolean isWord;
    }

    private TrieNode2 root;

    public Trie2(List<String> words) {
        this();
        words.forEach(this::insert);
    }

    public Trie2() {
        root = new TrieNode2();
    }

    public void insert(String word) {
        TrieNode2 current = root;
        for (int i = 0; i < word.length(); i++) {
            current = current.computeIfAbsent(word.charAt(i), k -> new TrieNode2());
        }
        current.isWord = true;
    }

    public List<String> search(String word) {
        List<String> results = new ArrayList<>();

        TrieNode2 node = findNode(word, root, 0);
        if (node == null) {
            return results;
        }

        findWords(node, new StringBuilder(word), results);
        return results;
    }

    private TrieNode2 findNode(String word, TrieNode2 current, int index) {
        if (index == word.length()) {
            return current;
        }

        Character ch = word.charAt(index);
        if (!current.containsKey(ch)) {
            return null;
        }

        return findNode(word, current.get(ch), ++index);
    }

    private void findWords(TrieNode2 current, StringBuilder sb, List<String> results) {
        current.forEach((Character ch, TrieNode2 child) -> {
            StringBuilder word = new StringBuilder(sb).append(ch);
            if (child.isWord) {
                results.add(word.toString());
            }
            findWords(child, word, results);
        });
    }
}