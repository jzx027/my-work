/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const countMap = {};

    // 第一次遍历：统计每个字符出现的次数
    for (let char of s) {
        countMap[char] = (countMap[char] || 0) + 1;
    }

    // 第二次遍历：找第一个只出现一次的字符
    for (let i = 0; i < s.length; i++) {
        if (countMap[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};