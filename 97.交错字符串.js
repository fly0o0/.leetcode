/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    let m = s1.length
    let n = s2.length

    if (s3.length != m + n) return false

    let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false))

    dp[0][0] = true

    // 不相符直接终止
    for (let i = 1; i <= m && s1[i - 1] == s3[i - 1]; i++) dp[i][0] = true
    for (let j = 1; j <= n && s2[j - 1] == s3[j - 1]; j++) dp[0][j] = true

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {

            if (dp[i - 1][j] && s3[i + j - 1] == s1[i - 1]) {
                dp[i][j] = true
            }

            if (dp[i][j - 1] && s3[i + j - 1] == s2[j - 1]) {
                dp[i][j] = true
            }
        }
    }

    return dp[m][n]
};
// @lc code=end

