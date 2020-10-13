/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    
    // 每行每列第一个使用空字符串
    let len1 = text1.length + 1
    let len2 = text2.length + 1

    // 每一行第一列标为0
    let dp = Array.from({length: len1}, () => new Array(len2).fill(0))
    
    for (let i = 1; i < len1; i++) {
        for (let j = 1; j < len2; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[len1 - 1][len2 -1]
};
// @lc code=end

console.log(longestCommonSubsequence('abc', 'def'))