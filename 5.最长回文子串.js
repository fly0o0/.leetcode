/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length
    let max = 0
    let ans = ''

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j <= len; j++) {

            let sub = s.substring(i, j)

            if (isPalindromic(sub) && sub.length > max) {
                max = Math.max(max, sub.length)
                ans = sub
            }
        }
    }
    return ans

    function isPalindromic(str) {
        return str === str.split('').reverse().join('')
    }
};

var longestPalindrome = function (s) {
    if (!s || s.length === 0) return "";
    let res = s[0];
  
    const dp = [];
  
    // 倒着遍历简化操作， 这么做的原因是dp[i][..]依赖于dp[i + 1][..]
    for (let i = s.length - 1; i >= 0; i--) {
      dp[i] = [];
      for (let j = i; j < s.length; j++) {
        if (j - i === 0) dp[i][j] = true;
        // specail case 1
        else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true;
        // specail case 2
        else if (s[i] === s[j] && dp[i + 1][j - 1]) {
          // state transition
          dp[i][j] = true;
        }
  
        if (dp[i][j] && j - i + 1 > res.length) {
          // update res
          res = s.slice(i, j + 1);
        }
      }
    }
    return res
};

// @lc code=end


console.log(longestPalindrome('bab'))

