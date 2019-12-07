/*

Implement min heap
*/

class MinHeap {
    arr: number[] = [];

    getLeftChild(index: number) {
        return 2 * index;
    }

    getRightChild(index: number) {
        return 2 * index + 1;
    }

    getParent(index) {
        return Math.floor(index / 2);
    }

    swap(parent: number, child: number) {
        let temp = this.arr[parent];
        this.arr[parent] = this.arr[child];
        this.arr[child] = temp;
    }

    heapify(index: number) {
        if (index === 0) {
            if (this.arr[0] > this.arr[1]) {
                this.swap(0, 1);
            }
        }
        if (index > 0) {
            let parent = this.getParent(index);
            if (this.arr[parent] > this.arr[index]) {
                this.swap(parent, index);
            }
            this.heapify(parent);
        }

    }
    add(val: number) {
        this.arr.push(val);
        this.heapify(this.arr.length - 1);

    }

    removeMin() {
        let min = this.arr.shift();
        this.heapify(this.arr.length - 1);
        return min;
    }
}

let minHeap = new MinHeap();

for (let i = 10; i > 3; i--) {
    minHeap.add(i);
}

console.log(minHeap.arr);

console.log(minHeap.removeMin());

console.log(minHeap.arr);