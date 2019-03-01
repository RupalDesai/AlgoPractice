package com.alpha.problemsolving;

/*
This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
*/

class DailyCodingProblem9 {

    public static void main(String args[]) {
        solution(new Command() {
            @Override
            public void execute() {
                {
                    System.out.println("Hello World");
                }
            }
        }, 1000);

        // java 8
        solution(() -> System.out.println("Hello World"), 1000);
    }

    public static void solution(Command command, int n) {
        new java.util.Timer().schedule(new java.util.TimerTask() {
            @Override
            public void run() {
                command.execute();
            }
        }, n);

    }

    interface Command {
        public void execute();
    }

}
