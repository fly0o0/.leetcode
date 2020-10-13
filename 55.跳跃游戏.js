/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * 思路：从后往前遍历，找到第一个能到达canReachable的跳跃点，直到跳跃点为第一个
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (!nums) return false

    let canReachable = nums.length - 1

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] + i >= canReachable) {
            canReachable = i
        }
    }

    return canReachable === 0
};
// @lc code=end

