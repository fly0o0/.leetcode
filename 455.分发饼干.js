/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    if (!s || s.length == 0) return 0

    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    let count = 0
    let eatIndex = 0
    let foodIndex = 0

    while (eatIndex < g.length && foodIndex < s.length) {
        if (g[eatIndex] <= s[foodIndex]) {
            count++
            eatIndex++
            foodIndex++
        } else {
            foodIndex++
        }
    }

    return count
};
// @lc code=end

console.log(findContentChildren([10,9,8,7], [5,6,7,8]))
