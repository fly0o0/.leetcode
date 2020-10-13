/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * https://leetcode-cn.com/problems/jump-game-ii/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-10/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let end = 0
    let maxPos = 0
    let count = 0

    for (let i = 0; i < nums.length - 1; i++) {
        maxPos = Math.max(maxPos, nums[i] + i)

        if (i === end) {
            end = maxPos
            count++
        }
    }

    return count
};
// @lc code=end

