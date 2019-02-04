/*
Smallest subarray with sum greater than a given value
Given an array of integers and a number x, find the smallest subarray with sum greater than the given value.
Examples:
arr[] = {1, 4, 45, 6, 0, 19}
   x  =  51
Output: 3
Minimum length subarray is {4, 45, 6}

arr[] = {1, 10, 5, 2, 7}
   x  = 9
Output: 1
Minimum length subarray is {10}

Asked in: Facebook

*/
public class DailyCodingProblem3
{

static int smallestSubWithSum(int arr[],
                              int n, int x)
{
    int curr_sum = 0, min_len = n + 1;

    int start = 0, end = 0;
    while (end < n)
    {
        while (curr_sum <= x && end < n)
        {
            if (curr_sum <= 0 && x > 0)
            {
                start = end;
                curr_sum = 0;
            }

            curr_sum += arr[end++];
        }

        while (curr_sum > x && start < n)
        {
            if (end - start < min_len)
                min_len = end - start;

            curr_sum -= arr[start++];
        }
    }
    return min_len;
}


public static void main (String[] args)
{
    int arr1[] = {- 8, 1, 4, 2, -6};
    int x = 6;
    int n1 = arr1.length;
    int res1 = smallestSubWithSum(arr1,
                                  n1, x);
    if(res1 == n1 + 1)
        System.out.println("Not possible");
    else
        System.out.println (res1);
}
}