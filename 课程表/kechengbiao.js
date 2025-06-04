/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // 初始化邻接表和入度数组
    const adj = new Array(numCourses).fill().map(() => []);
    const indegree = new Array(numCourses).fill(0);

    // 构建图结构和入度数组
    for (const [a, b] of prerequisites) {
        adj[b].push(a);
        indegree[a]++;
    }

    // 初始化队列，将所有入度为 0 的节点加入
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    let count = 0;

    // 拓扑排序
    while (queue.length > 0) {
        const current = queue.shift();
        count++;

        for (const neighbor of adj[current]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    return count === numCourses;
};