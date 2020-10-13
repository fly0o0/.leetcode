/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (!x || x.length === 1) {
        return true
    }

    x = String(x)

    let left = 0
    let right = x.length - 1

    while (left < right) {
        if (x[left] !== x[right]) {
            return false
        } else {
            left++
            right--
        }
    }

    return true
};
// @lc code=end

