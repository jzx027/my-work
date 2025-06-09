/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = [];

    for (let digit of num) {
        // 贪心：当栈不为空，当前数字小于栈顶，且还能删除时
        while (k > 0 && stack.length > 0 && Number(digit) < Number(stack[stack.length - 1])) {
            stack.pop(); // 删除栈顶较大的数
            k--;
        }
        stack.push(digit);
    }

    // 如果还有 k > 0，说明是单调递增序列，删掉最后 k 个字符即可
    if (k > 0) {
        stack = stack.slice(0, stack.length - k);
    }

    // 去除前导零
    let result = stack.join('').replace(/^0+/, '');

    // 处理空字符串的情况
    return result === '' ? '0' : result;
};