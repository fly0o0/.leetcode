/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    if (s.length == 0) {
        return 0
    }

    let n = s.length
    // Array.from的使用，避免手写一段循环
    let dp = Array.from({ length: n }, () => new Array(n).fill(0))

    for (let i = 0; i < n; i++) {
        dp[i][i] = 1
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[i] == s[j]) {
                dp[i][j] = dp[i+1][j-1] + 2
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
            }
        }
    }


    return dp[0][n-1]
};
// @lc code=end

console.log(longestPalindromeSubseq('bbbab'))