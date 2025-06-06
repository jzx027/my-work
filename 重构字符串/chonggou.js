/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const n = s.length;
    const freq = new Array(26).fill(0);
    
    // Step 1: 统计字符频率
    for (let char of s) {
        freq[char.charCodeAt() - 'a'.charCodeAt()]++;
    }
    
    // Step 2: 检查是否可能重组
    let maxCount = Math.max(...freq);
    if (maxCount > Math.floor((n + 1) / 2)) return "";
    
    // Step 3: 构造结果字符串
    let result = new Array(n).fill('');
    let index = 0;
    
    // 填充出现频率最高的字符（先填充偶数索引）
    for (let i = 0; i < 26; i++) {
        if (freq[i] === maxCount) {
            while (freq[i]--) {
                if (index >= n) index = 1; // 如果偶数位置填满，则开始填充奇数位置
                result[index] = String.fromCharCode(i + 'a'.charCodeAt());
                index += 2;
            }
            break;
        }
    }
    
    // 填充剩余的字符
    for (let i = 0; i < 26; i++) {
        while (freq[i] > 0) {
            if (index >= n) index = 1; // 如果偶数位置填满，则开始填充奇数位置
            result[index] = String.fromCharCode(i + 'a'.charCodeAt());
            freq[i]--;
            index += 2;
        }
    }

    return result.join('');
};