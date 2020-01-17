/*
This is your coding interview problem for today.

This problem was asked by Facebook.

Implement regular expression matching with the following special characters:

. (period) which matches any single character
* (asterisk) which matches zero or more of the preceding element
That is, implement a function that takes in a string and a valid regular expression and returns whether or not the string matches the regular expression.

For example, given the regular expression "ra." and the string "ray", your function should return true. The same regular expression on the string "raymond" should return false.

Given the regular expression ".*at" and the string "chat", your function should return true. The same regular expression on the string "chats" should return false.
*/

function matches_first_char(str: string, regex: String) {
    if (str.length != 0 && (regex[0] === '.' || regex[0] === str[0])) {
        return true;
    } else {
        return false;
    }
}
function matches(str: string, regex: string) {
    if (regex == '') {
        return str === '';
    }
    if (regex.length === 1 || regex[1] !== '*') {
        if (matches_first_char(str, regex)) {
            return matches(str.slice(1,str.length), regex.slice(1,regex.length));
        } else {
            return false;
        }

    }
    else {
        if (matches(str, regex.slice(2, regex.length))) {
            return true;
        }
        let i = 0;
        while (matches_first_char(str.slice(i, str.length), regex)) {
            if (matches(str.slice(i + 1, str.length), regex)) {
                return true;
            }
            i++;
        }
        return false;
    }

}
console.log(matches('chat', '.*at'));
console.log(matches('chats', '.*at'));
console.log(matches('cat', '.*at'));
console.log(matches('ccat', '.*at'));
console.log(matches('ccat', 'd*at'));
console.log(matches('ccat', 'c.*at'));
console.log(matches('ccat', 'cd*at'));