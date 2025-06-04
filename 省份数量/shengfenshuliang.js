/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);

    // DFS 函数
    function dfs(city) {
        for (let i = 0; i < n; i++) {
            if (isConnected[city][i] === 1 && !visited[i]) {
                visited[i] = true;
                dfs(i);
            }
        }
    }

    let provinces = 0;

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            dfs(i);
            provinces++;
        }
    }

    return provinces;
};