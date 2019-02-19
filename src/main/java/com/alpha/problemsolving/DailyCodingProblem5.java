package com.alpha.problemsolving;

/*
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.

Explanation: https://codereview.stackexchange.com/questions/213785
*/

class DailyCodingProblem5 {

    public static void main(String args[]) {
        int[] arr = { 3, 4, -1, 1 };
        int res = solution(arr);
        System.out.println(res);

        int[] arr2 = { 1, 2, 0 };
        res = solution(arr2);
        System.out.println(res);
    }

    private static int solution(int[] arr) {
        int n = arr.length;
        int i = 0;
        for (i = 0; i < n; i++) {
            int val = arr[i];

            if (val <= 0 || val > n)
                continue;
            while (val != arr[val - 1]) {
                int nextval = arr[val - 1];
                arr[val - 1] = val;
                val = nextval;
                if (val <= 0 || val > n) {
                    break;
                }
            }
        }
        for (i = 0; i < n; i++) {
            if (arr[i] != i + 1) {
                return i + 1;
            }
        }
        return i;

    }
}
