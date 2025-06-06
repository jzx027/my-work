/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const n = matrix.length;
    
    // 统计矩阵中小于等于 x 的元素个数
    const countLessEqual = (x) => {
        let count = 0;
        let row = n - 1;
        let col = 0;

        while (row >= 0 && col < n) {
            if (matrix[row][col] <= x) {
                count += row + 1; // 当前行有 row+1 个元素满足条件
                col++;
            } else {
                row--; // 当前位置大于 x，往上一行找
            }
        }
        return count;
    };

    // 二分查找
    let low = matrix[0][0];
    let high = matrix[n - 1][n - 1];

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        let count = countLessEqual(mid);

        if (count < k) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
};