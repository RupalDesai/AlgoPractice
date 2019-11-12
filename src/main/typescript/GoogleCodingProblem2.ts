/*
Given a non-empty string like "Code" return a string like "CCoCodCode".

stringSplosion("Code") → "CCoCodCode"
stringSplosion("abc") → "aababc"
stringSplosion("ab") → "aab"
*/

function stringSplosion(input: string) {
    let result: string = '';
    for (let i = 0; i < input.length; i++) {
        result = result.concat(input.substring(0, i + 1));
    }
    console.log(result);
}

stringSplosion("Code");
stringSplosion("abc");
stringSplosion("ab");