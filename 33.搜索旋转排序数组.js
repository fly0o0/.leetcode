/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0
    let high = nums.length - 1
    
    while(low <= high) {
        let mid = low + Math.floor((high - low) / 2)
        if (nums[mid] === target) return mid

        // [low, mid] 有序
        if (nums[mid] >= nums[low]) {
            if (target >= nums[low] && target < nums[mid]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        } else {
            if (target > nums[mid] && target <= nums[high]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }
    return -1
};
// @lc code=end

