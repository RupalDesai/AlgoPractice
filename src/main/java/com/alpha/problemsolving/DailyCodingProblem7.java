package com.alpha.problemsolving;

/*
This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.

Explanation: https://codereview.stackexchange.com/questions/213943

*/

class DailyCodingProblem7 {

    public static void main(String args[]) {
        String message = "111";
        int res = solution(message);
        System.out.println(res);

        message = "1234";
        res = solution(message);
        System.out.println(res);

        message = "121";
        res = solution(message);
        System.out.println(res);
    }

    private static int solution(String message) {
        int count = 1;
        for (int i = 0; i < message.length() - 1; i++) {
            if (Integer.valueOf(message.substring(i, i + 2)) <= 26) {
                count++;
            }
        }
        return count;
    }

}
