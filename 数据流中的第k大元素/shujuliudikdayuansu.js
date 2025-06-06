class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.size() === 0) return null;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._heapifyDown();
        }
        return min;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex === index) break;
            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }
}

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinHeap();

        // 初始化堆，保持大小不超过 k
        for (let num of nums) {
            this.add(num);
        }
    }

    add(val) {
        this.minHeap.push(val);
        if (this.minHeap.size() > this.k) {
            this.minHeap.pop(); // 弹出最小的，保持 k 个最大元素
        }
        return this.minHeap.peek(); // 堆顶就是第 k 大的元素
    }
}