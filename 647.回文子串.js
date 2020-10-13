/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let len = s.length
    let dp = Array.from({ length: len }, () => new Array(len).fill(false))
    let ans = 0

    // 由于是dp状态方程为：dp[i][j] = dp[i + 1][j - 1]
    // i需要反过来遍历，j正遍历
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {

            if (i == j) {
                dp[i][j] = true
                // i和j的字符相同
            } else if (s[i] === s[j]) {
                // 当i和j相邻的情况
                if (j - i == 1) {
                    dp[i][j] = true
                    // 不相邻的情况
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
                // 其余
            } else {
                dp[i][j] = false
            }

            if (dp[i][j]) {
                ans++
            }
        }
    }

    return ans
};
// @lc code=end

