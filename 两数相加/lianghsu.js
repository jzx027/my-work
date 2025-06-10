/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0); // 哑节点，方便操作
    let current = dummyHead;         // 当前节点指针
    let carry = 0;                   // 进位值

    // 遍历两个链表，直到都为空
    while (l1 || l2) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;

        const sum = x + y + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    // 如果最后还有进位
    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
};