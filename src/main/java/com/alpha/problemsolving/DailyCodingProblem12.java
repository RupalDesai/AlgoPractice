package com.alpha.problemsolving;

/*
This problem was asked by Amazon.

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

    1, 1, 1, 1
    2, 1, 1
    1, 2, 1
    1, 1, 2
    2, 2

What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

Explanation : https://codereview.stackexchange.com/questions/215973
*/
public class DailyCodingProblem12 {
    public static void main(String args[]) {
        int[] X = { 1, 2 };
        int N = 4;
        int result = solution(N, X);
        System.out.println(result);

        int[] X1 = { 1, 2, 3 };
        N = 4;
        result = solution(N, X1);
        System.out.println(result);

        int[] X2 = { 1, 2, 3 };
        N = 3;
        result = solution(N, X2);
        System.out.println(result);
    }

    static int solution(int N, int[] X) {
        int[] memory = new int[N + 1];
        memory[0] = 1;
        memory[1] = 1;
        return noOfWays(N, X, memory);
    }

    static int noOfWays(int N, int[] X, int[] memory) {
        if (memory[N] != 0) {
            return memory[N];
        }
        int noOfWays = 0;
        for (int i = 0; i < X.length && (N - X[i] >= 0); i++) {
            memory[N - X[i]] = noOfWays(N - X[i], X, memory);
            noOfWays += memory[N - X[i]];
        }
        return noOfWays;

    }

}