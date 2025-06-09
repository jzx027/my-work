/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const deque = []; // 双端队列，存储的是索引
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // 移除不在当前窗口范围内的元素
        if (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // 移除所有比当前元素小的元素
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // 加入当前元素的索引
        deque.push(i);

        // 当遍历到第 k-1 个元素时开始记录结果
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};