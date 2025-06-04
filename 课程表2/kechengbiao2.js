var findOrder = function(numCourses, prerequisites) {
    // 图的邻接表表示和入度计数
    let graph = Array.from({length: numCourses}, () => []), 
        inDegree = new Array(numCourses).fill(0);
    
    // 构建图和入度数组
    prerequisites.forEach(([dest, src]) => {
        graph[src].push(dest);
        inDegree[dest]++;
    });

    // 入度为0的节点队列
    let queue = [], order = [];
    inDegree.forEach((degree, index) => {
        if(degree === 0) queue.push(index);
    });

    // 执行拓扑排序
    while(queue.length) {
        let course = queue.shift();
        order.push(course);
        graph[course].forEach(dest => {
            if(--inDegree[dest] === 0) queue.push(dest);
        });
    }

    // 检查是否所有课程都包含在order中
    return order.length === numCourses ? order : [];
};