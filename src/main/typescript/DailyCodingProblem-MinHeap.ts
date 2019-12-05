/*

Implement min heap
*/

class MinHeap {
    arr: number[] = [];

    getLeftChild(index: number) {
        return 2 * index + 1;
    }

    getRightChild(index: number) {
        return 2 * index + 2;
    }

    getParent(index) {
        return Math.floor(index - 1 / 2);
    }

    swap(parent: number, child: number) {
        let temp = this.arr[parent];
        this.arr[parent] = this.arr[child];
        this.arr[child] = temp;
    }

    heapify(index: number) {
        if (index > 0) {
            let parent = this.getParent(index);
            console.log(parent, index);
            if (this.arr[parent] > this.arr[index]) {
                this.swap(parent, index);
                this.heapify(parent);
            }
        }

    }
    add(val: number) {
        this.arr.push(val);
        this.heapify(this.arr.length - 1);

    }

    remove() {
        this.arr.pop();
    }
}

let minHeap = new MinHeap();

for (let i = 10; i > 0; i--) {
    minHeap.add(i);
}

console.log(minHeap.arr);