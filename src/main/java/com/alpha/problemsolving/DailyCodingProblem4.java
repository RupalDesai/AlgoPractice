package com.alpha.problemsolving;

/*
An array of N words is given. Each word consists of small letters ('a'- 'z'). Our goal is to concatenate the words in such a say as to obtain a single word with the longest possible sub-string composed of one particular letter. Find the length of such a sub-string.

Examples:
1. Given N=3 and words=['aabb','aaaa','bbab'], your function should return 6. One of the best concatenations is words[1]+words[0]+words[2]='aaaaaabbbbab'. The longest sub-string is composed of the letter 'a' and its length is 6.
2. Given N=3 and words=['xxbxx','xbx','x'], your function should return 4. One of the best concatenations is words[0]+words[2]+words[1]='xxbxxxxbx'. The longest sub-string is composed of letter 'x' and its length is 4.
*/

class DailyCodingProblem4 {
    static int max = 0; // variable : holds largest length of substring

    public static void main(String[] args) {
        String[] array = { "aabb", "aaaa", "bbab" };

        solution(array);
        System.out.println(max);
    }

    static void solution(String[] arr) {

        for (int i = 0; i < arr.length; i++) {
            String word = arr[0];
            int j = 1;
            while (word.charAt(0) == word.charAt(j)) {
                j++;
            }
            String prefix = word.substring(0, j);
            j = word.length() - 2;

            while (word.charAt(word.length() - 1) == word.charAt(j)) {
                j--;
            }
            String suffix = word.substring(j, word.length() - 1);
            System.out.println("prefix is : " + prefix + " suffix is " + suffix);
        }
    }
}