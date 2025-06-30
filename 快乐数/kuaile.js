/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // 用一个集合来记录出现过的数字
    const seen = new Set();

    // 定义计算平方和的函数
    const getSumOfSquares = (num) => {
        let sum = 0;
        while (num > 0) {
            let digit = num % 10; // 获取个位数
            sum += digit * digit; // 计算平方并加到总和
            num = Math.floor(num / 10); // 去掉个位数
        }
        return sum;
    }

    // 循环计算平方和，直到结果为 1 或进入循环
    while (n !== 1) {
        if (seen.has(n)) { // 如果当前数字已经出现过，说明进入循环
            return false; // 返回 false
        }
        seen.add(n); // 将当前数字加入集合
        n = getSumOfSquares(n); // 计算当前数字的平方和
    }

    return true; // 如果循环结束，说明是快乐数
};