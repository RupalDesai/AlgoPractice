/*

This problem was asked by Amazon.

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

*/
function findLongestSubstring(str: string, k: number) {

    let longSubstring = '';
    let map: Map<string, number> = new Map();
    let higher_bound = 0;
    let lower_bound = 0;
    while (higher_bound < str.length) {
        map.set(str[higher_bound], higher_bound);

        if (map.size <= k) {
            if ((higher_bound - lower_bound) > longSubstring.length) {
                longSubstring = str.substr(lower_bound, higher_bound);
            }
        } else {
            //let str=abcba and lower bound is 0. when higher bound reaches c then there are 3 distinct characters. Hence we have to start from last occurance of a
            lower_bound = map.get(str[lower_bound]);
            map.delete(str[lower_bound]);
            // increase to start from b for string abcba
            lower_bound++;
        }
        higher_bound++;

    }
    if ((higher_bound - lower_bound) > longSubstring.length) {
        longSubstring = str.substr(lower_bound, higher_bound);
    }
    console.log(longSubstring);
}

findLongestSubstring('abcba', 2);

findLongestSubstring('ababcbccb', 2);