package com.alpha.problemsolving;

import java.util.HashMap;
import java.util.Map;

/*
An array of N words is given. Each word consists of small letters ('a'- 'z'). Our goal is to concatenate the words in such a say as to obtain a single word with the longest possible sub-string composed of one particular letter. Find the length of such a sub-string.

Examples:
1. Given N=3 and words=['aabb','aaaa','bbab'], your function should return 6. One of the best concatenations is words[1]+words[0]+words[2]='aaaaaabbbbab'. The longest sub-string is composed of the letter 'a' and its length is 6.
2. Given N=3 and words=['xxbxx','xbx','x'], your function should return 4. One of the best concatenations is words[0]+words[2]+words[1]='xxbxxxxbx'. The longest sub-string is composed of letter 'x' and its length is 4.

Explanation: https://codereview.stackexchange.com/questions/213689
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
        int[] keys=new int[26];
        for (int i = 0; i < arr.length; i++) {
            String word = arr[i];
            int j = 1;
            while (j < word.length() && word.charAt(0) == word.charAt(j)) {
                j++;
            }
            int key = word.charAt(0);
            keys[key%26]=key;
            if (j == word.length()) {
                both.put(key, both.getOrDefault(key, 0) + j);
            } else {
                suffix.put(key, Integer.max(suffix.getOrDefault(key, 0), j));
                j = word.length() - 1;
                while (j > 0 && word.charAt(word.length() - 1) == word.charAt(j - 1)) {
                    j--;
                }
                key = word.charAt(word.length() - 1);
                keys[key%26]=key;
                prefix.put(key, Integer.max(suffix.getOrDefault(key, 0), word.length() - j));
            }
        }
        int res = 0;
        for (int key : keys) {
            res = Integer.max(res,
                    prefix.getOrDefault(key, 0) + both.getOrDefault(key, 0) + suffix.getOrDefault(key, 0));
        }
        return res;
    }
}
