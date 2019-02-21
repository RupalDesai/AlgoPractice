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
        String message = "11111111";
        int n=message.length();
        Integer[] ways=new Integer[n+1];
        int res = solution(message,n,ways);
        System.out.println(res);

    }

    private static int solution(String message,int k,Integer[] ways) {
        int n=message.length();
        if(k==0)
        {
            return 1;
        }
        if((int)message.charAt(n-k)==0)
        {
            return 0;
        }

        if(ways[k]!=null)
        {
            System.out.println(k+" : " +ways[k]);
            return ways[k];
        }
        ways[k]=solution(message,k-1,ways);
        if(k>=2 && Integer.valueOf(message.substring(n-k,n-k+2))<26)
        ways[k]+=solution(message,k-2,ways);
        return ways[k];

    }

}
