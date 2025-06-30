var isSameTree = function (p, q) {
    // p、q 都为空，则两棵树相同
    if (p === null && q === null) return true;

    // p、q 两棵树有一颗为空，则两棵树不同
    if (p === null || q === null) return false;

    // p、q 两棵树根节点的值不同，则两棵树不同
    if (p.val !== q.val) return false;

    // 继续判断 p、q 的左右子节点是否相同
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};