/*
Given a string S and a set of words D, find the longest word in D that is a subsequence of S.

Word W is a subsequence of S if some number of characters, possibly zero, can be deleted from S to form W, without reordering the remaining characters.

Note: D can appear in any format (list, hash table, prefix tree, etc.

For example, given the input of S = "abppplee" and D = {"able", "ale", "apple", "bale", "kangaroo"} the correct output would be "apple"

The words "able" and "ale" are both subsequences of S, but they are shorter than "apple".

The word "bale" is not a subsequence of S because even though S has all the right letters, they are not in the right order.

The word "kangaroo" is the longest word in D, but it isn't a subsequence of S.
*/

function findLongestSubsequence(S: string, D: string[]) {
    let X: number[] = Array(D.length).fill(0);
    let longest = 0;


    // Iterate through all characters of String S
    for (let i = 0; i < S.length; i++) {
        // Iterate through every word is dictionary
        for (let j = 0; j < D.length; j++) {
            // Check if charcater in string matches the character in each word and increase the counter if character in S matches the character in the word W
            if (S.charAt(i) === D[j].charAt(X[j])) {
                X[j]++;
                if (X[j] === D[j].length) {
                    longest = D[j].length;
                }
            }

        }
    }
    console.log('longest subsequence is ' + longest, X);

}

findLongestSubsequence('abppplee', ["able", "ale", "apple", "bale", "kangaroo"]);