package com.alpha;

import java.util.HashMap;
import java.util.Map;

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
 */
public class DailyCodingProblem1 {
    public static void main(String args[]) {
        int[] arr = { 10, 15, 3, 7 };
        int k = 17;

        Boolean ans = solution(arr, k);
        System.out.println(ans);
    }

    private static Boolean solution(int[] arr, int k) {
        final Map<Integer, Boolean> map = new HashMap<>();
        for (int x : arr) {
            map.put(k - x, true);
        }
        for (int x : arr) {
            if (Boolean.TRUE.equals(map.get(Integer.valueOf(x)))) {
                return true;
            }
        }
        return false;
    }
}