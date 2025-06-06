/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mapping = { ')': '(', '}': '{', ']': '[' };

    for (let char of s) {
        if (char in mapping) {
            // 如果是右括号
            const topElement = stack.length ? stack.pop() : '#';
            
            if (mapping[char] !== topElement) {
                return false;
            }
        } else {
            // 如果是左括号
            stack.push(char);
        }
    }

    return stack.length === 0;
};