/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*' || s[i] === '(') {
      stack.push(s[i]);
    } else {
      // 检测到右括号创建临时存储
      let helper = [];
      // 如果是*则全部存起来 优先用左括号进行匹配
      while (stack[stack.length - 1] === '*') {
        helper.push(stack.pop());
      }
      // 当栈内全空的情况下说明没有匹配到左括号
      if (stack.length === 0) {
        // 此时使用*
        if (!helper.length) return false;
        helper.pop();
        // 匹配到了左括号
      } else {
        stack.pop();
      }
      // 将*放回去
      while (helper.length) {
        stack.push(helper.pop());
      }
    }
  }
  // 对剩余元素进行比较(左括号剩余情况)
  let starCount = 0;
  while (stack.length) {
    // 不难发现如果左括号前没有*的话就不能匹配成功
    if (stack.pop() === '*') {
      starCount++;
    } else {
      // 此时说明没有多余的*了
      if (starCount === 0) {
        return false;
      } else {
        starCount--;
      }
    }
  }
  return true;
};