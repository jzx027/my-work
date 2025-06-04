var nthUglyNumber = function(n) {
    // 初始化 dp 数组，dp[i] 表示第 i+1 个丑数
    const dp = new Array(n).fill(0);
    dp[0] = 1; // 第一个丑数是 1

    // 三个指针分别用于乘以 2, 3, 5
    let i2 = 0, i3 = 0, i5 = 0;

    for (let i = 1; i < n; i++) {
        // 计算下一个丑数
        const next2 = dp[i2] * 2, next3 = dp[i3] * 3, next5 = dp[i5] * 5;
        dp[i] = Math.min(next2, next3, next5);

        // 移动指针
        if (dp[i] === next2) i2++;
        if (dp[i] === next3) i3++;
        if (dp[i] === next5) i5++;
    }

    return dp[n - 1];
};