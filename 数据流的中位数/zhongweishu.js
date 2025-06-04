class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] <= this.heap[index]) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    bubbleDown(index) {
        const lastIndex = this.heap.length - 1;
        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            let smallest = index;

            if (left <= lastIndex && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right <= lastIndex && this.heap[right] < this.heap[smallest]) smallest = right;

            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

class MedianFinder {
    constructor() {
        // 最大堆用负数保存（即小根堆模拟大根堆）
        this.maxHeap = new MinHeap(); 
        this.minHeap = new MinHeap();
    }

    addNum(num) {
        // 总是先插入最大堆（用负数）
        this.maxHeap.push(-num);

        // 维护平衡：确保 maxHeap.peek() <= minHeap.peek()
        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.push(-this.maxHeap.pop());
        }

        if (this.minHeap.size() > 0 && -this.maxHeap.peek() > this.minHeap.peek()) {
            this.minHeap.push(-this.maxHeap.pop());
            this.maxHeap.push(-this.minHeap.pop());
        }
    }

    findMedian() {
        if ((this.maxHeap.size() + this.minHeap.size()) % 2 === 0) {
            return (-this.maxHeap.peek() + this.minHeap.peek()) / 2;
        } else {
            return -this.maxHeap.peek();
        }
    }
}