/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let ans = []
    let len = nums.length

    if (nums == null || len < 3) return ans
        
    nums = nums.sort((a, b) => {
        return a - b
    })

    for (let i = 0; i < len; i++) {
        // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if (nums[i] > 0) break
        // 去重
        if (i > 0 && nums[i] == nums[i - 1]) continue

        let left = i + 1
        let right = len - 1

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]

            if (sum === 0) {
                ans.push([nums[i], nums[left], nums[right]])
                // 去重
                while (left < right && nums[left] === nums[++left]);
                // 去重
                while (left < right && nums[right] === nums[--right]);
            } else if (sum < 0) {
                // 去重
                ++left
            } else {
                // 去重
                --right
            }
        }
    }

    return ans
};
// @lc code=end

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
