/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    let lower

    while (true) {
        lower = a ^ b;    // 计算低位
        let carry = a & b;  // 计算进位
        
        if (carry == 0) break

        a = lower
        b = carry << 1
    }
    return lower
};
// @lc code=end

