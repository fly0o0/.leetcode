/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0
    let high = nums.length - 1

    while (low <= high) {
        let mid = parseInt((low + high) / 2)

        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    // 退出循环时 hi比lo小1
    return low 
};
// @lc code=end

