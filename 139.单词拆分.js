/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let len = s.length
    let dp = new Array(len + 1).fill(false)
    let set = new Set(wordDict)

    dp[0] = true

    for (let i = 1; i <= len; i++) {
        for (let j = i; j >= 0; j--) {
            const word = s.slice(j, i)

            if (set.has(word) && dp[j] == true) {
                dp[i] = true
                break
            }
        }
    }

    return dp[len]
};
// @lc code=end

