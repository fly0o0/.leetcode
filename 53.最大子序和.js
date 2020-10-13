/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * 动态规划
 * 
 * dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) {
        return 0
    }
    
    let dp = []
    dp[0] = nums[0]

    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
    }

    return Math.max(...dp)
};
// @lc code=end

/**
 * 状态压缩
 * 
 * dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) {
        return 0
    }
    
    let max = nums[0]
    let sum = nums[0]

    for (let i = 1; i < nums.length; i++) {
       
        if (sum > 0) {
            sum = sum + nums[i]
        } else {
            sum = nums[i]
        }
        max = Math.max(sum, max)
    }

    return max
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

