package com.alpha.problemsolving;

/*
This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?
*/

class DailyCodingProblem9 {

    public static void main(String args[]) {

        int arr[] = { 2, 4, 6, 2, 5, 13 };
        int res = solution(arr);
        System.out.println(res);

        int arr1[] = { 1, 0, 3, 9, 2, 14 };
        res = solution(arr1);
        System.out.println(res);
    }

    static int solution(int[] arr) {
        int n = arr.length;
        int[] maxArr = new int[n];
        int max = 0;
        for (int i = n - 1; i > 0; i--) {
            maxArr[i] = findLargestSum(arr, i, n, maxArr);
            max = Math.max(max, maxArr[i]);
        }
        return max;

    }

    static int findLargestSum(int[] arr, int i, int n, int[] max) {
        System.out.println(i);
        if (max[i] != 0) {
            return max[i];
        }
        if (i == 0 || i == 1) {
            return arr[i];
        }
        if (i - 2 == 0) {
            return arr[i] + findLargestSum(arr, i - 2, n, max);
        }
        return arr[i] + Integer.max(findLargestSum(arr, i - 2, n, max), findLargestSum(arr, i - 3, n, max));

    }

}
