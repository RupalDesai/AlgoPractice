/*  Return a new sorted merged list from K sorted lists, each with size N. */
let arr1 = [1, 3, 6];
let arr2 = [4, 5, 7, 10, 12];
let arr3 = [2, 8, 9, 11];

let list = [arr1, arr2, arr3];

var arr = Array(list.length);

function getParent(index: number) {
    return Math.floor(index / 2);
}
function swap(parent: number, child: number) {
    let temp = arr[child];
    arr[child] = arr[parent];
    arr[parent] = temp;
}
function heapify(index: number) {
    if (index > 0) {
        let parent = getParent(index);
        if (arr[parent][0] > arr[index][0]) {
            swap(parent, index);
        }
        heapify(parent);

    }

}
function mergedList(List: number[][]) {
    //Initialize a empty mergedlist
    let mergedList: number[] = [];
    //Add first element from each list to (min-heap )array
    arr[0] = [list[0].shift(), 0];
    arr[1] = [list[1].shift(), 1];
    arr[2] = [list[2].shift(), 2];
    //While all the list are not empty
    while (list[0].length > 0 || list[1].length > 0 || list[2].length > 0) {
        //heapfiy the array arr
        heapify(arr.length - 1);
        //remove the top most element. In Min heap top  most element will be the smallest
        let temp = arr.shift();
        //Push the smallest element into mergedList
        mergedList.push(temp[0]);
        //If the list from which the first element belongs to is not empty
        if (list[temp[1]].length > 0) {
            switch (temp[1]) {
                case 0:
                    // remove the first element and add it to arr
                    arr.push([list[temp[1]].shift(), 0]); break;
                case 1:
                    arr.push([list[temp[1]].shift(), 1]); break;
                case 2:
                    arr.push([list[temp[1]].shift(), 2]); break;
            }
        }

    }
    while (arr.length > 0) {
        mergedList.push(arr.shift()[0]);
    }

    console.log(mergedList);

}


mergedList(list);