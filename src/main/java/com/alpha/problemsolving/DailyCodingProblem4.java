package com.alpha.problemsolving;

import java.util.HashMap;
import java.util.Map;

/*
An array of N words is given. Each word consists of small letters ('a'- 'z'). Our goal is to concatenate the words in such a say as to obtain a single word with the longest possible sub-string composed of one particular letter. Find the length of such a sub-string.

Examples:
1. Given N=3 and words=['aabb','aaaa','bbab'], your function should return 6. One of the best concatenations is words[1]+words[0]+words[2]='aaaaaabbbbab'. The longest sub-string is composed of the letter 'a' and its length is 6.
2. Given N=3 and words=['xxbxx','xbx','x'], your function should return 4. One of the best concatenations is words[0]+words[2]+words[1]='xxbxxxxbx'. The longest sub-string is composed of letter 'x' and its length is 4.
*/

class DailyCodingProblem4 {

    public static void main(String args[]) {
        String[] arr = { "aabb", "aaaa", "bbab" };
        int res = solution(arr);
        System.out.println(res);

        String[] arr2 = { "xxbxx", "xbx", "x" };
        res = solution(arr2);
        System.out.println(res);

        String[] arr3 = { "xxxxx", "xxx", "xxbxx" };
        res = solution(arr3);
        System.out.println(res);
    }

    private static int solution(String[] arr) {
        Map<Integer, Integer> prefix = new HashMap<>();
        Map<Integer, Integer> suffix = new HashMap<>();
        Map<Integer, Integer> both = new HashMap<>();
        for (int i = 0; i < arr.length; i++) {
            String word = arr[i];
            int j = 1;
            while (j < word.length() && word.charAt(0) == word.charAt(j)) {
                j++;
            }
            int key = word.charAt(0);
            if (j == word.length()) {
                if (both.containsKey(key)) {
                    Integer temp = both.get(key);

                    both.put(key, temp + j);

                } else {
                    both.put(key, j);
                }
            } else {
                if (suffix.containsKey(key)) {
                    Integer temp = suffix.get(key);
                    if (j > temp) {
                        suffix.put(key, j);
                    }
                } else {
                    suffix.put(key, j);
                }

                j = word.length() - 1;

                while (j > 0 && word.charAt(word.length() - 1) == word.charAt(j - 1)) {
                    j--;
                }

                key = word.charAt(word.length() - 1);
                if (prefix.containsKey(key)) {
                    Integer temp = prefix.get(key);
                    if (word.length() - j > temp) {
                        prefix.put(key, word.length() - j);
                    }
                } else {
                    prefix.put(key, word.length() - j);
                }
            }
        }
        int res = 0;
        for (Integer key : prefix.keySet()) {
            if (suffix.containsKey(key)) {
                int temp = prefix.get(key) + suffix.get(key);
                if (temp > res) {
                    res = temp;
                }
            }

        }

        for (Integer key : suffix.keySet()) {
            if (prefix.containsKey(key)) {
                int temp = prefix.get(key) + suffix.get(key);
                if (temp > res) {
                    res = temp;
                }
            }

        }

        for (Integer key : both.keySet()) {
            if (prefix.containsKey(key)) {
                int temp = prefix.get(key) + both.get(key);
                if (temp > res) {
                    res = temp;
                }
            }
            if (suffix.containsKey(key)) {
                int temp = both.get(key) + suffix.get(key);
                if (temp > res) {
                    res = temp;
                }
            }
        }

        return res;
    }
}
