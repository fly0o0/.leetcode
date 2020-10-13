/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * https://leetcode-cn.com/problems/next-permutation/solution/xia-yi-ge-pai-lie-by-powcai/
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums == null || nums.length == 0) return;
    let firstIndex = -1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            firstIndex = i;
            break;
        }
    }
    if (firstIndex == -1) {
        reverse(nums, 0, nums.length - 1);
        return;
    }
    let secondIndex = -1
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[firstIndex]) {
            secondIndex = i;
            break;
        }
    }
    swap(nums, firstIndex, secondIndex);
    reverse(nums, firstIndex + 1, nums.length - 1)

    return
};

function reverse(nums, i, j) {
    while (i < j) {
        swap(nums, i++, j--)
    }
}

function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
}
// @lc code=end

