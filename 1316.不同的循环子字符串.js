/*
 * @lc app=leetcode.cn id=1316 lang=javascript
 *
 * [1316] 不同的循环子字符串
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var distinctEchoSubstrings = function(text) {
    let set = new Set()
    let len = text.length

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const left = text.substring(i, j)
            const right = text.substring(j, j + (j - i))

            if (left === right) set.add(left)
        }
    }

    return set.size
};
// @lc code=end

