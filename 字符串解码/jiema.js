/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let currentNum = 0;
    let currentStr = '';

    for (let char of s) {
        if (!isNaN(char)) {
            // 构建多位数
            currentNum = currentNum * 10 + Number(char);
        } else if (char === '[') {
            // 遇到左括号，压栈当前字符串和当前数字
            stack.push(currentStr);
            stack.push(currentNum);
            // 重置
            currentStr = '';
            currentNum = 0;
        } else if (char === ']') {
            // 弹出数字和之前的字符串
            let num = stack.pop();
            let prevStr = stack.pop();
            // 重复当前字符串并拼接到之前字符串
            currentStr = prevStr + currentStr.repeat(num);
        } else {
            // 字母，拼接到当前字符串
            currentStr += char;
        }
    }

    return currentStr;
};