/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let min = "", left = 0, right = -1
    let map = {}
    t.split('').forEach(element => {
        if (map[element] == null) map[element] = 1
        else map[element] += 1
    })
    let count = Object.keys(map).length
    while (right <= s.length) {
        if (count == 0) {
            let current = s[left]
            if (map[current] != null) map[current]++
            if (map[current] > 0) count++
            let temp = s.substring(left, right + 1)
            if (min == '') min = temp
            else min = min.length < temp.length ? min : temp
            left ++
        } else {
            right++
            let current = s[right]
            if (map[current] != null) map[current]--
            if (map[current] == 0) count--
        }
    }
    return min
};
// @lc code=end

