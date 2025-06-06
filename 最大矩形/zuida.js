/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxArea = 0;
    
    // 初始化高度数组
    let heights = new Array(cols).fill(0);

    for (let row = 0; row < rows; row++) {
        // 更新当前行对应的柱状图高度
        for (let col = 0; col < cols; col++) {
            if (matrix[row][col] === '1') {
                heights[col] += 1;
            } else {
                heights[col] = 0;
            }
        }

        // 使用柱状图最大矩形函数计算当前行的最大面积
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
};

// 柱状图最大矩形面积函数（单调栈法）
function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;
    heights = [0, ...heights, 0]; // 哨兵技巧

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
}