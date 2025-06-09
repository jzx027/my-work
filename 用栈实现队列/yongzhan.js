class MyQueue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    // 入队：压入 inStack
    push(x) {
        this.inStack.push(x);
    }

    // 私有方法：将 inStack 倒入 outStack
    _move() {
        while (this.inStack.length > 0) {
            this.outStack.push(this.inStack.pop());
        }
    }

    // 出队：从 outStack 弹出
    pop() {
        if (this.outStack.length === 0) {
            this._move();
        }
        return this.outStack.pop();
    }

    // 查看队首元素
    peek() {
        if (this.outStack.length === 0) {
            this._move();
        }
        return this.outStack[this.outStack.length - 1];
    }

    // 判断队列是否为空
    empty() {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }
}