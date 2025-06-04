var isBipartite = function(graph) {
    const colors = new Array(graph.length).fill(0); // 0: 未着色, 1: 颜色A, -1: 颜色B
    
    function dfs(node, color) {
        if (colors[node] !== 0) return colors[node] === color;
        colors[node] = color;
        
        for (let neighbor of graph[node]) {
            if (!dfs(neighbor, -color)) return false;
        }
        
        return true;
    }
    
    for (let i = 0; i < graph.length; i++) {
        if (colors[i] === 0 && !dfs(i, 1)) {
            return false;
        }
    }
    
    return true;
};