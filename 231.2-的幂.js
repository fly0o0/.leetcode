/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 0) {
        return false
    }

    while( n % 2 === 0) {
        n = n >> 1
    }

    return n === 1
};

var isPowerOfTwo = function(n) {
    if (n === 0) {
        return false
    }

   return n > 0 && (n & (n - 1)) === 0
};
// @lc code=end


console.log(isPowerOfTwo(-2147483648))