/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  /* 定义：输入一个节点，返回以该节点为根的二叉树的前序遍历结果 */
  let res = [];
  if (root == null) return res;
  // 前序遍历结果特点：第一个是根节点的值，接着是左子树，最后是右子树
  res.push(root.val);
  res.push(...preorderTraversal(root.left));
  res.push(...preorderTraversal(root.right));
  return res;
};