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

        int arr1[] = { 1, 9, 3, 14, 6, 8 };
        res = solution(arr1);
        System.out.println(res);
    }

    // Using Memorization with space as O(n)
    static int solution1(int[] arr) {
        int n = arr.length;
        int[] max = new int[n];
        if (n == 0) {
            return 0;
        }
        if (n == 1) {
            return arr[0];
        }
        if (n == 2) {
            return Math.max(arr[0], arr[1]);

        } else {
            max[0] = arr[0];
            max[1] = Math.max(arr[0], arr[1]);
            for (int i = 2; i < n; i++) {
                max[i] = Math.max(max[i - 1], arr[i] + max[i - 2]);
            }
            return max[n - 1];

        }

    }

    // Using Memorization with space as O(1)
    static int solution(int[] arr) {
        int n = arr.length;
        if (n == 0) {
            return 0;
        }
        if (n == 1) {
            return arr[0];
        }
        if (n == 2) {
            return Math.max(arr[0], arr[1]);

        } else {
            int max0 = arr[0];
            int max1 = Math.max(arr[0], arr[1]);
            for (int i = 2; i < n; i++) {
                int temp = max1;
                max1 = Math.max(max1, arr[i] + max0);
                max0 = temp;
            }
            return max1;

        }

    }

}
