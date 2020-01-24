/*

This is your coding interview problem for today.

This problem was asked by Facebook.

Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
*/

function isValid(s:string){
    let stack = new Array(s.length);
    for(let i=0;i<s.length;i++){
        if(s[i]==='(' || s[i]==='{' ||s[i]==='['){

stack.push(s[i]);
        }
        else{
            if(stack.length===0){
             return false;
            }

        let char=stack.shift();
        if(char==='(' && s[i]!==')') return false;
         if(char==='[' && s[i]!==']') return false;
          if(char==='{' && s[i]!=='}') return false;
        }
    }

    if(stack.length>0){
        return false;
    }
    return true;
}

console.log(isValid('([)]'));
console.log(isValid('([])[]({})'));
console.log(isValid('((()'));