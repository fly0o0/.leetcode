/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * 思路：基于原地操作，我们不能通过生成一个另外的数组来完成。
 * 只能重复利用同一个数组，用两个指针达到操作两个数组的功效。
 * j相当于指向新数组，从0开始，j打头的表示不相等的项，
 * 把所有不相等的往j复制，生成了就是去除了重复的。
 * 
 * 时间复杂度：O（n），额外空间复杂度：O（1）
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let j = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++
            nums[j] = nums[i]
        }
    }

    return j + 1
};
// @lc code=end

