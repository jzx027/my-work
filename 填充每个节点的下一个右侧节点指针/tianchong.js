const connect = (root) => {
  if (root == null) {
    return root;
  }

  const dfs = (root) => {
    if (root.left == null && root.right == null) {
      return;
    }
    root.left.next = root.right;
    if (root.next) {
      root.right.next = root.next.left;
    }
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);
  return root;
};