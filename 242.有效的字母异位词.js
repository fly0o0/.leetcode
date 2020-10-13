/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = new Map()

    for (let sub of s) {
        if (map.has(sub)) {
            map.set(sub, map.get(sub) + 1)
        } else {
            map.set(sub, 1)
        }
    }

    for (let sub of t) {
        if (map.has(sub)) {
            const value = map.get(sub) - 1

            value === 0 ? map.delete(sub) : map.set(sub, value)
        } else {
            map.set(sub, 1)
        }
    }

    return map.size == 0
}; 
// @lc code=end