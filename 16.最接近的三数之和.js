/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let len = nums.length
    nums = nums.sort((a, b) => a - b)
    let ans = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < len; i++) {
        let left = i + 1
        let right = len - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]

            if (sum > target) {
                right--
            } else if (sum < target) {
                left++
            } else {
                return sum
            }

            if (Math.abs(sum - target) < Math.abs(ans - target)) {
                ans = sum
            }
        }
    }

    return ans
};
// @lc code=end

console.log(threeSumClosest([0, 2, 1, -3], 1))
