/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const ans = []
    func(root, ans)
    return ans
};

const func = (root, ans) => {
    if (!root) {
        return
    }
    func(root.left, ans)
    ans.push(root.val)
    func(root.right, ans)
}