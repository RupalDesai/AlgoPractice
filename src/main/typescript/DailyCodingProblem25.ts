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

function validate(str: string, regex: string) {

    if (regex.length === 0) {
        return str.length == 0 ? true : false;
    }
    if (regex[0] === '.' || regex[0] === str[0]) {
        return validate(str.slice(1, str.length), regex.slice(1, regex.length));
    }
    return validate(str, regex.slice(1, regex.length)) || validate(str.slice(1, str.length), regex.slice(1, regex.length));
}
console.log(validate('chat', '.*at'));
console.log(validate('chats', '.*at'));