/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * 时间复杂度：O（n）
 * 
 * 思路：
 * 如果暴力解法，就是内外两层循环进行遍历，把所有当前数字和后面子数组遍历下。
 * 
 * a + b = c，即 a = c - b， 所以可以使用map，
 * 把当前遍历到的不在map里的数字存在map里，
 * 遍历后面的数字如果遇到了map里有值就是存在了
 * 
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = {}

    for (let i = 0; i < nums.length; i++) {
        const another = target - nums[i]
        const index = map[another]

        if (index == null) {
            map[nums[i]] = i
        } else {
            return [index, i]
        }
    }
};
// @lc code=end

