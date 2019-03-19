package com.alpha.problemsolving;

import java.util.ArrayList;
import java.util.List;

/*
This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
*/

class DailyCodingProble11 {

    public static void main(String args[]) {

        String[] words = { "dog", "deer", "deal" };
        Trie trie = new Trie();
        for (String word : words) {
            trie.insert(word);
        }
        trie.search("de", trie.root, 0).stream().forEach(word -> System.out.println(word));
        trie.search("do", trie.root, 0).stream().forEach(word -> System.out.println(word));
    }
}

class TrieNode {
    public Character node;
    public TrieNode[] children = new TrieNode[26];
    public boolean isWord;

    TrieNode(Character ch) {
        this.node = ch;
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
        List<String> results = new ArrayList<>();
        Character ch = searchTxt.charAt(index);
        if (currentNode.children[ch - 'a'] == null) {
            return results;
        }
        currentNode = currentNode.children[ch - 'a'];
        if (index == searchTxt.length() - 1) {
            findWords(currentNode, new StringBuilder(searchTxt), results);
            return results;
        }
        return search(searchTxt, currentNode, ++index);
    }

    public void findWords(TrieNode currentNode, StringBuilder sb, List<String> results) {

        for (TrieNode child : currentNode.children) {
            if (child != null) {
                if (child.isWord == true) {
                    results.add(sb.append(child.node).toString());
                }
                findWords(child, new StringBuilder(sb).append(child.node), results);
            }
        }
    }
}