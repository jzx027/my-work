var shortestSubarray = function(nums, k) {
    const n = nums.length;
    const prefixSum = new Array(n + 1).fill(0);

    // 构建前缀和数组
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    const deque = []; // 存储 prefixSum 的索引，保持 prefixSum[i] 递增
    let minLength = Infinity;

    for (let j = 0; j <= n; j++) {
        // 尝试从队尾删除比当前 prefixSum[j] 大的元素，维护递增性质
        while (deque.length > 0 && prefixSum[j] <= prefixSum[deque[deque.length - 1]]) {
            deque.pop();
        }

        // 尝试从队首找到满足 prefixSum[j] - prefixSum[i] >= k 的 i
        while (deque.length > 0 && prefixSum[j] - prefixSum[deque[0]] >= k) {
            const i = deque.shift(); // 找到符合条件的最左边 i
            minLength = Math.min(minLength, j - i);
        }

        deque.push(j);
    }

    return minLength === Infinity ? -1 : minLength;
};