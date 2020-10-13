/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ans = 0

    while(x != 0) {
        // 取个位
        let t = x % 10
        // 形成反转
        let tmp = ans * 10 + t

        if (tmp > Math.pow(2, 31) - 1 || tmp < -Math.pow(2, 31))
            return 0
        ans = tmp

        // 去除个位
        x = parseInt(x /10)
    }

    return ans
};
// @lc code=end

console.log(reverse(-123))
