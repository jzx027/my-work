var longestDupSubstring = function(s) {
    let maxLen = 0;
    let maxStr = '';

    // 生成滚动哈希的基本参数
    const base = 256;
    const mod = 1000000007;

    function checkForDuplicate(mid) {
        let hash = 0;
        let h = 1;
        const strSet = new Map(); // 使用Map来存储哈希值和起始索引

        // 计算base的mid次幂
        for (let i = 0; i < mid - 1; i++) {
            h = (h * base) % mod;
        }

        // 初始化第一个窗口的哈希值
        for (let i = 0; i < mid; i++) {
            hash = (hash * base + s.charCodeAt(i)) % mod;
        }

        strSet.set(hash, 0); // 存储初始子串的哈希值和索引

        // 滑动窗口，更新哈希值
        for (let i = mid; i < s.length; i++) {
            hash = (hash + mod - s.charCodeAt(i - mid) * h % mod) % mod;
            hash = (hash * base + s.charCodeAt(i)) % mod;

            if (strSet.has(hash)) {
                // 发现相同的哈希值，进行字符串比较
                let startIndex = strSet.get(hash);
                let substr = s.substring(startIndex, startIndex + mid);
                let newStr = s.substring(i - mid + 1, i + 1);
                if (substr === newStr) {
                    // 确认是真正的重复子串
                    maxLen = mid;
                    maxStr = substr;
                    return true;
                }
            } else {
                strSet.set(hash, i - mid + 1);
            }
        }

        return false;
    }

    function binarySearch(start, end) {
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (checkForDuplicate(mid)) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    binarySearch(1, s.length);
    return maxStr;
};