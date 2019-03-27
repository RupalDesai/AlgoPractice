package com.alpha.problemsolving;

import java.util.HashSet;
import java.util.Set;

/*
This problem was asked by Amazon.

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

*/
public class DailyCodingProblem13 {
    public static void main(String args[]) {
        String s = "abcba";
        int k = 2;
        int result = solution(s, k);
        System.out.println(result);

        s = "aabacbebebe";
        k = 2;
        result = solution(s, k);
        System.out.println(result);

        s = "aabbcc";
        k = 3;
        result = solution(s, k);
        System.out.println(result);
    }

    static int solution(String s, int k) {
        int n = s.length();
        int max = 0;
        String maxLengthString = null;
        if (n == 0 || k == 0) {
            return max;
        } else {
            StringBuilder window = new StringBuilder();
            Set<Character> set = new HashSet<>();
            for (int i = 0; i < n; i++) {
                Character ch = s.charAt(i);
                // If
                if (set.size() == k && !set.contains(ch)) {
                    // Fetch the last index of the first character at window. Discard the string
                    // before the last index.
                    window = new StringBuilder(
                            window.substring(window.lastIndexOf(Character.toString(window.charAt(0))) + 1));
                    set.clear();
                    for (int j = 0; j < window.length(); j++) {
                        set.add(window.charAt(j));
                    }
                }
                set.add(ch);
                window.append(ch);
                if (window.length() > max) {
                    max = window.length();
                    maxLengthString = window.toString();
                }
            }
        }
        System.out.println("String with max length is " + maxLengthString.toString());
        return max;
    }

}