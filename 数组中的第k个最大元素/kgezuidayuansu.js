/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // 快速选择函数：寻找第 k 大的元素
    function quickSelect(left, right) {
        // 随机选择 pivot，防止最坏情况
        const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        const pivot = nums[pivotIndex];
        
        // 把 pivot 移动到最右端
        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
        
        let slow = left;
        for (let fast = left; fast < right; fast++) {
            if (nums[fast] > pivot) { // 我们希望大的放左边，小的放右边
                [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
                slow++;
            }
        }
        
        // 把 pivot 放到正确的位置
        [nums[slow], nums[right]] = [nums[right], nums[slow]];
        
        // 返回 pivot 的位置
        return slow;
    }

    let left = 0, right = nums.length - 1;
    const target = k;

    while (left <= right) {
        const pos = quickSelect(left, right);
        if (pos === target - 1) {
            return nums[pos];
        } else if (pos < target - 1) {
            left = pos + 1;
        } else {
            right = pos - 1;
        }
    }

    return -1; // 不应该走到这里
};