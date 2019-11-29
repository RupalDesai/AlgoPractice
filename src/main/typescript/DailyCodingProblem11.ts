/*
This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

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

        let words: string[] = [];
        this.fetchMatchingWords(cur.children, res, words);
        console.log(words);
    }

    private fetchMatchingWords(children: TryNode[], word: string, words: string[]) {

        children.forEach((node: TryNode) => {
            if (node.isWord) {
                words.push(word + node.val);
            }
            this.fetchMatchingWords(node.children, word + node.val, words);
        });
    }
}

let tryExample = new TryExample();
tryExample.preProcessDictionary(['dog', 'deer', 'deal']);
tryExample.search('de');
tryExample.search('do');