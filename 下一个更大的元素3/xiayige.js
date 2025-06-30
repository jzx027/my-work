var nextGreaterElement = function(n) {
    let s = n.toString().split(''), size = s.length
    if (size <= 1) return -1
    let i = size - 2, j = size - 1
    for(; i >= 0; i--) if (s[i] < s[i + 1]) break
    if (i < 0) return -1
    for(; j >= 0; j--) if (s[j] > s[i]) break
    [s[i], s[j]] = [s[j], s[i]]
    let res = +(s.slice(0, i + 1).join('') + s.slice(i + 1).reverse().join(''))
    return res >= 2 ** 31 ? -1 : res
};