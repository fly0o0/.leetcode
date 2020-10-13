/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * 根据左右指针计算中间位置 m，并比较 m 与 m+1 的值，
 * 如果 m 较大，则左侧存在峰值，r = m，
 * 如果 m + 1 较大，则右侧存在峰值，l = m + 1
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        let mid = Math.floor((right + left) / 2)

        if (nums[mid] > nums[mid + 1]) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
};
// @lc code=end

