/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const parent = new Array(edges.length + 1).fill(0).map((_, i) => i); // 节点从 1 开始

    // 查找根节点（带路径压缩）
    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    // 合并两个集合
    function union(x, y) {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX === rootY) return false; // 已在同一个集合，合并失败
        parent[rootY] = rootX;
        return true;
    }

    for (const [u, v] of edges) {
        if (!union(u, v)) {
            return [u, v]; // 合并不成功说明这条边是多余的
        }
    }

    return []; // 不可能情况
};