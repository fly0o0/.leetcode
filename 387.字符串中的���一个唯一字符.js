/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let dict = {}
  
    for (const sub of s) {
      !dict[sub] ? dict[sub] = 1 : dict[sub]++
    }
    
    for (let i = 0; i < s.length; i++) {
      if (dict[s[i]] == 1) return i
    }
    
    return -1
  };
// @lc code=end

