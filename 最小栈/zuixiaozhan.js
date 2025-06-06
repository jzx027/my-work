class MinStack {
    constructor() {
        this.stack = [];     // 数据栈，存储所有入栈元素
        this.minStack = [];  // 辅助栈，存储当前最小值
    }

    /**
     * 将元素压入栈中
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        // 如果 minStack 为空 或 当前值小于等于 minStack 栈顶（即当前最小值）
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    /**
     * 弹出栈顶元素
     * @return {void}
     */
    pop() {
        if (this.stack[this.stack.length - 1] === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        this.stack.pop();
    }

    /**
     * 获取栈顶元素
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * 检索栈中最小元素
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}