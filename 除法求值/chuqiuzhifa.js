/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    // 构建图：邻接表 + 权重
    const graph = new Map();

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const value = values[i];

        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);

        graph.get(a).push([b, value]);
        graph.get(b).push([a, 1 / value]);
    }

    // DFS 函数
    function dfs(current, target, visited) {
        if (visited.has(current)) return -1.0;
        if (!graph.has(current) || !graph.has(target)) return -1.0;
        if (current === target) return 1.0;

        visited.add(current);

        for (const [neighbor, weight] of graph.get(current)) {
            const result = dfs(neighbor, target, visited);
            if (result !== -1.0) {
                return weight * result;
            }
        }

        return -1.0;
    }

    const results = [];

    for (const [start, end] of queries) {
        results.push(dfs(start, end, new Set()));
    }

    return results;
};