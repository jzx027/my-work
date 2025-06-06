/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [];
    let num = 0;
    let sign = '+'; // 当前遇到的第一个符号默认为 '+'

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (!isNaN(parseInt(char))) {
            num = num * 10 + parseInt(char);
        }

        // 遇到运算符或已到结尾，处理前面的数字和符号
        if (isNaN(parseInt(char)) && char !== ' ' || i === s.length - 1) {
            if (sign === '+') {
                stack.push(num);
            } else if (sign === '-') {
                stack.push(-num);
            } else if (sign === '*') {
                stack.push(stack.pop() * num);
            } else if (sign === '/') {
                let temp = stack.pop();
                // 向0取整处理
                if (temp > 0) {
                    stack.push(Math.floor(temp / num));
                } else {
                    stack.push(Math.ceil(temp / num));
                }
            }

            // 更新符号为当前字符，更新 num
            sign = char;
            num = 0;
        }
    }

    return stack.reduce((a, b) => a + b, 0);
};