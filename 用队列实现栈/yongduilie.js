class MyStack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    // 将元素压入栈
    push(x) {
        this.q2.push(x);
        while (this.q1.length > 0) {
            this.q2.push(this.q1.shift());
        }
        [this.q1, this.q2] = [this.q2, this.q1]; // q1 保持当前栈状态
    }

    // 弹出栈顶元素
    pop() {
        return this.q1.shift();
    }

    // 获取栈顶元素
    top() {
        return this.q1[0];
    }

    // 判断栈是否为空
    empty() {
        return this.q1.length === 0;
    }
}