const invertTree = (root) => {
  if (root == null) { // 遍历到null节点时，不用翻转，直接返回它本身
    return root;
  }
  invertTree(root.left);
  invertTree(root.right);

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
};