/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    const visited = new Map();
    const clone = new _Node(node.val, []);
    visited.set(node, clone);

    const queue = [node];

    while (queue.length > 0) {
        const current = queue.shift();

        current.neighbors.forEach(neighbor => {
            if (!visited.has(neighbor)) {
                const cloneNeighbor = new _Node(neighbor.val, []);
                visited.set(neighbor, cloneNeighbor);
                queue.push(neighbor);
            }
            visited.get(current).neighbors.push(visited.get(neighbor));
        });
    }

    return clone;
};