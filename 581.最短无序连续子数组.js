/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * 错误思路：
 * 1. 从前往后找，找到第一个不满足递增的
 * 2. 从后往前找，找到第一个不满足递减的
 * 3. 坑点1: 遇到了[1,2,3,4]，如果是有序数组则，返回的应该是0
 * 4. 坑点2: 遇到了[1,3,2,2,2]，把< 或 > 改成了 <= 或 >=，好像行了
 * 5. 坑点3: 但在找到第一个不满足条件的点，比如是2 同时这时2是连续重复的，
 *          你还得往前找，还记不住重复部分结尾的点，导致第二个不满足的点覆盖了第一个
 * 6. 这个思路没有好的解决
 * 
 * 思路二：
 * 从左往右，把一路的最大值找出来，如果当前数比已遍历部分的最大值小，说明发生了不满足递增
 * 从右往左一个套路
 * 这样就找到了左右边界
 * 
 * 时间复杂度：O（n），空间复杂度：O（1）
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let len = nums.length - 1
    let left = 0
    let right = 0
    let max = nums[0]
    let min = nums[len]
    for (let i = 0; i < nums.length; i++) {
        // 一直往右查找，找最大值
        // 记录比最大值小的索引
        if (max > nums[i]) {
            right = i
        } else {
            max = nums[i]
        }
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        // 一直往左查找，找最小值
        // 记录比最小值大的索引
        if (min < nums[i]) {
            left = i
        } else {
            min = nums[i]
        }
    }

    return left === right ? 0 : right - left + 1
};

// @lc code=end

