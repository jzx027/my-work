var searchMatrix = function(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    let left = -1, right = m * n;
    while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2);
        const x = matrix[Math.floor(mid / n)][mid % n];
        if (x === target) {
            return true;
        }
        if (x < target) {
            left = mid;
        } else {
            right = mid;
        }
    }
    return false;
};

