/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 2) return num

    let low = 2
    let high = num

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)
        if (mid * mid === num) {
            return true
        } else if (mid * mid > num) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return false
};
// @lc code=end

