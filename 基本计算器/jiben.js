/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [];
    let num = 0;
    let sign = 1;   // 1 for '+', -1 for '-'
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (!isNaN(parseInt(char))) {
            // 构建多位数
            num = num * 10 + parseInt(char);
        } else if (char === '+') {
            result += sign * num;
            num = 0;
            sign = 1;
        } else if (char === '-') {
            result += sign * num;
            num = 0;
            sign = -1;
        } else if (char === '(') {
            // 将当前状态压栈
            stack.push(result);
            stack.push(sign);
            // 开始新的上下文
            result = 0;
            sign = 1;
        } else if (char === ')') {
            result += sign * num;
            num = 0;
            // 先乘以栈顶的符号，再加回栈顶的结果
            result *= stack.pop(); // sign
            result += stack.pop(); // previous result
        }
        // 忽略空格
    }

    // 处理最后剩余的数字
    result += sign * num;

    return result;
};