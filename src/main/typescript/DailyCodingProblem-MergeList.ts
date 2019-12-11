/*  Return a new sorted merged list from K sorted lists, each with size N. */
let arr1 = [1, 3, 6];
let arr2 = [4, 5, 7];
let arr3 = [2, 8, 9];

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
    let mergedList: number[] = [];
    let i = 0, j = 0, k = 0;
    arr[0] = [list[0][i], 0];
    arr[1] = [list[1][j], 1];
    arr[2] = [list[2][k], 2];
    while (i < list[0].length || j < list[1].length || k < list[2].length) {
        heapify(arr.length - 1);
        let temp = arr.shift();
        console.log(arr);
        mergedList.push(temp[0]);
        switch (temp[1]) {
            case 0: i++;
                arr.push(list[temp[1][i]]); break;
            case 1: j++;
                arr.push(list[temp[1][j]]); break;
            case 2: k++;
                arr.push(list[temp[1][k]]); break;
        }

    }
    console.log(mergedList);


}


mergedList(list);