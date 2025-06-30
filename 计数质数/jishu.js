/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // 创建一个数组表示是否为质数，初始值全为 1（true）
    const isPrime = new Array(n).fill(1);
    let ans = 0; // 计数质数个数

    // 从 2 开始筛选，因为 0 和 1 不是质数
    for (let i = 2; i < n; ++i) {
        if (isPrime[i]) { // 如果当前数是质数
            ans += 1; // 计数 +1
            // 将所有 i 的倍数标记为非质数
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = 0; // 标记为 0 表示非质数
            }
        }
    }
    return ans; // 返回质数个数
};