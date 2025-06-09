/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = []; // 栈中保存的是索引

    for (let i = 0; i < n; i++) {
        // 当前温度
        const currentTemp = temperatures[i];

        // 判断栈顶元素是否小于当前温度
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < currentTemp) {
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }

        stack.push(i);
    }

    return answer;
};