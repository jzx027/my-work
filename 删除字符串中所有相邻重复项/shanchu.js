/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [];

    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            // 栈顶有重复，删除它
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};