const averageOfLevels = (root) => {
  const res = [];
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const levelSize = queue.length;      
    let levelSum = 0;
    for (let i = 0; i < levelSize; i++) {
      const cur = queue.shift();
      levelSum += cur.val;
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    res.push(levelSum / levelSize);
  }
  return res;
};