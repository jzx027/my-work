/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    //Do not return anything, modify s in-place instead.
    reverse(s)
};

var reverse = function(s) {
    let l = -1, r = s.length;
    while(++l < --r) [s[l], s[r]] = [s[r], s[l]];
};