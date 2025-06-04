var networkDelayTime = function(times, n, k) {
    // 构建图的邻接表
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [u, v, w] of times) {
        graph[u].push([v, w]);
    }

    // 初始化距离数组和访问标记
    const dist = new Array(n + 1).fill(Infinity);
    dist[k] = 0;

    // 使用普通的数组模拟优先队列
    let pq = [[k, 0]]; // [节点, 到该节点的时间]

    while (pq.length > 0) {
        // 找到当前pq中时间最小的元素（这里可以用更高效的数据结构优化）
        pq.sort((a, b) => a[1] - b[1]); // 按时间升序排序
        const [u, time] = pq.shift(); // 取出时间最小的节点
        
        if (time > dist[u]) continue;

        for (const [v, weight] of graph[u]) {
            const newTime = time + weight;
            if (newTime < dist[v]) {
                dist[v] = newTime;
                pq.push([v, newTime]);
            }
        }
    }

    // 计算答案
    const maxTime = Math.max(...dist.slice(1));
    return isFinite(maxTime) ? maxTime : -1;
};