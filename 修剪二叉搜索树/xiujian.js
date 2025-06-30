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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
    if (!root) return root//当前节点为空时返回root，也就是null
    if (root.val < low) {
        return trimBST(root.right, low, high)//当前节点值小于最小值时，表示该节点包括左子树都小于最小值，所以全部删除，并且从右子树第一个值开始继续检查
    } else if (root.val > high) {
        return trimBST(root.left, low, high)//当前节点值大于最大值时，表示该节点包括右子树都大于最大值，所以全部删除，并且从左子树第一个值开始继续检查
    } else {
        root.left = trimBST(root.left, low, high)//如果当前节点满足条件，则递归查询左右子树
        root.right = trimBST(root.right, low, high)
    }
    return root//最后返回root
};