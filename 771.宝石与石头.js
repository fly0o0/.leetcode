/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const set = new Set([...J])
    let count = 0

    for (const sub of S) {
        set.has(sub) && count++
    }
    
    return count
};
// @lc code=end