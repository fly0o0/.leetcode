/*
 * @lc app=leetcode.cn id=1371 lang=javascript
 *
 * [1371] 每个元音包含偶数次的最长子字符串
 */

// @lc code=start
/**
 * 又看了题解...
 * 
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
    let mapper = {
        "a": 1,
        "e": 2,
        "i": 4,
        "o": 8,
        "u": 16
    }
    let seen = { 0: -1 }
    let res = cur = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] in mapper)
            cur ^= mapper[s[i]]
        // 全部奇偶性都相同，相减一定都是偶数
        if (cur in seen)
            res = Math.max(res, i - seen[cur])
        else
            seen[cur] = i
    }

    return res
};
// @lc code=end

