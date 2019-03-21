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
*/
public class DailyCodingProblem12 {
    public static void main(String args[]) {
        int[] X = { 1, 2 };
        int N = 4;
        int[] memory = new int[N];
        memory[0] = 1;
        memory[1] = 1;
        int result = noOfWays(N, X, memory);
        System.out.println(result);
    }

    static int noOfWays(int N, int[] X, int[] memory) {
        if (memory[N] == 0) {
            return memory[N];
        }
        int noOfWays = 0;
        for (int i = 0; i < X.length; i++) {
            memory[N-X[i]]= noOfWays(N - X[i], X,memory);
            noOfWays+=memory[N-X[i]];
        }
        return noOfWays;

    }

}