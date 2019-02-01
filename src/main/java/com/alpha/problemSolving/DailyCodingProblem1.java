package com.alpha.problemSolving;

import java.util.HashSet;
import java.util.Set;

/**
 *
 * This problem was recently asked by Google.
 *
 * Given a list of numbers and a number k, return whether any two numbers from
 * the list add up to k.
 *
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is
 * 17.
 *
 *  Explanation : https://codereview.stackexchange.com/questions/212621
 */
public class DailyCodingProblem1 {
    public static void main(String args[]) {
        int[] arr = { 10, 15, 3, 7 };
        int k = 17;

        boolean ans = solution(arr, k);
        System.out.println(ans);
    }

    private static boolean solution(int[] arr, int k) {
        final Set<Integer> set = new HashSet<>();
        for (int x : arr) {
            if (Boolean.TRUE.equals(set.contains(x))) {
                return true;
            }
            set.add(k-x);
        }
        return false;
    }
}