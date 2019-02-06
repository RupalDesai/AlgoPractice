package com.alpha.problemsolving;

import java.util.Arrays;

/**
 *
 * This problem was asked by Uber.
 *
 * Given an array of integers, return a new array such that each element at
 * index i of the new array is the product of all the numbers in the original
 * array except the one at i.
 *
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be
 * [120, 60, 40, 30,24]. If our input was [3, 2, 1], the expected output would
 * be [2, 3, 6].
 *
 * Follow-up: what if you can't use division?
 *
 * Explanation: https://codereview.stackexchange.com/questions/212674
 *
 */
public class DailyCodingProblem2 {
    public static void main(String args[]){
        int[] arr = { 1, 2, 3, 4, 5 };
        int[] ans = solution(arr, arr.length);
        System.out.println(Arrays.toString(ans));

        arr = new int[] { 3, 2, 1 };
        ans = solution(arr, arr.length);
        System.out.println(Arrays.toString(ans));
    }

    private static int[] solution(int[] arr, int n) {
        int[] left = new int[n];
        int[] right = new int[n];
        int[] res = new int[n];
        left[0] = 1;
        right[n - 1] = 1;

        for (int i = 0; i < n - 1; i++) {
            left[i + 1] = arr[i] * left[i];
        }

        for (int i = n - 1; i >= 1; i--) {
            right[i - 1] = arr[i] * right[i];
        }
        for (int i = 0; i < n; i++) {
            res[i] = left[i] * right[i];
        }
        return res;
    }
}