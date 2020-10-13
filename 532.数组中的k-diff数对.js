/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的K-diff数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if (k < 0) return 0

    let diff = new Set()
    let saw = new Set()

    for (let num of nums) {
        // 检查数对中较小的数 1 是否在数组中：3 - 2 = 1
        if (saw.has(num - k)) {
            diff.add(num - k)
        }
        // 检查数对中较大的数 3 是否在数组中：1 + 2 = 3
        if (saw.has(num + k)) {
            diff.add(num)
        }
        saw.add(num)
    }

    return diff.size
};
// @lc code=end

