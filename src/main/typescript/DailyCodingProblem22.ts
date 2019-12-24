/*
This problem was asked by Microsoft.

Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].
*/
class TryNode {
    val: string;
    children: TryNode[] = [];
    isWord: boolean = false;
    constructor(val: string) {
        this.val = val;
    }
}

class TryExample {
    root: TryNode;
    constructor() {
        this.root = new TryNode('*');
    }

    insert(word: string) {
        let cur: TryNode = this.root;
        for (let i = 0; i < word.length; i++) {
            let ch = word.charAt(i);
            let charCode = ch.charCodeAt(0);
            if (cur.children[charCode - 97] === undefined) {
                cur.children[charCode - 97] = new TryNode(ch);
            }
            cur = cur.children[charCode - 97];
        }
        cur.isWord = true;
    }


    preProcessDictionary(dictionary: string[]) {
        dictionary.forEach((word: string) => {
            this.insert(word);
        });
    }

    search(word: string) {
        let cur: TryNode = this.root;
        let res = '';
        for (let i = 0; i < word.length; i++) {
            let ch = word.charAt(i);
            let charCode = ch.charCodeAt(0);
            if (cur.children[charCode - 97]) {
                cur = cur.children[charCode - 97];
                res = res + ch;
            }
        }

        if (cur.isWord) {
            return res;
        }
        return undefined;
    }

}

let tryExample = new TryExample();
tryExample.preProcessDictionary(['quick', 'brown', 'the', 'fox']);
let s: string = 'thequickbrownfox';
let i = 0, j = 0;;
while (j <= s.length) {
    let len_sub_str = j - i;
    let word = tryExample.search(s.substr(i, len_sub_str));
    if (word != undefined) {
        console.log(s.substr(i, len_sub_str), '=====>', word);
        i = j;
    }
    j++;
}
