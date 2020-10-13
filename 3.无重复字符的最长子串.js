/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length
    let max = 0
    let map = new Map()

    for (let start = 0, end = 0; end < n; end++) {
        const alpha = s[end]

        if (map.has(alpha)) {
            start = Math.max(map.get(alpha) + 1, start)
        }
        
        map.set(alpha, end)

        max = Math.max(max, end - start + 1)
    }

    return max
};
// @lc code=end

