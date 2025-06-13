var twoSum = function(nums, target) {
    for (let i = 0; ; i++) { // 枚举 i
        for (let j = i + 1; j < nums.length; j++) { // 枚举 i 右边的 j
            if (nums[i] + nums[j] === target) { // 满足要求
                return [i, j]; // 返回两个数的下标
            }
        }
    }
    // 题目保证有解，循环中一定会 return
    // 所以这里无需 return，毕竟代码不会执行到这里
};
