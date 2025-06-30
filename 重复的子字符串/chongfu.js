/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  // 计算部分匹配表
  const next = kmpNext(s);
  // 如果能由子串多次构成，部分匹配表中一定有个偶数索引，最长公共前后缀长度是子串长度的一半
  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0 && next[i] === (i + 1) / 2 && s.length % next[i] === 0) {
      // 找到位置一半的子串，向后匹配
      let targetIndex = i + 1, patternIndex = 0;
      while (targetIndex < s.length) {
        if (s[targetIndex] === s[patternIndex]) {
          targetIndex++;
          patternIndex++;
        } else {
          break;
        }
        if (patternIndex > next[i] - 1) {
          patternIndex = 0;
        }
      }
      if (targetIndex === s.length && patternIndex === 0) return true;
    }
  }
  return false;
};

// 部分匹配表
const kmpNext = (patternStr) => {
    const next = [];
    next[0] = 0;

    let len = 0;
    let i = 1;
    while(i < patternStr.length) {
        if(patternStr[len] === patternStr[i]) {
            next[i] = ++len;
            i++
        } else {
            if(len === 0) {
                next[i] = 0;
                i++;
            } else {
                len = next[len - 1];
            }
        }
    }
    return next;
}