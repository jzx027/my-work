/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Step 1: Count frequency using a Map
    const freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Create a min heap of size k
    const minHeap = new MinHeap();

    for (let [num, freq] of freqMap.entries()) {
        minHeap.push([freq, num]);
        if (minHeap.size() > k) {
            minHeap.pop();  // Remove the smallest frequency element
        }
    }

    // Step 3: Extract the elements from the heap
    const result = [];
    while (minHeap.size() > 0) {
        result.push(minHeap.pop()[1]);  // Get the number part
    }

    return result;
};

// Simple implementation of a Min Heap that stores [frequency, number]
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

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
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

            if (leftChildIndex < length && this.heap[leftChildIndex][0] < this.heap[smallestIndex][0]) {
                smallestIndex = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex][0] < this.heap[smallestIndex][0]) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex === index) break;
            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }
}