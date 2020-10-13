/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || nums.length === 0) {
        return 0
    }
    let n = nums.length
    
    // dp[i] 表示前 i 间房屋能偷窃到的最高总金额
    let dp = []
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for(let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }

    return dp[n -1]
};
// @lc code=end

console.log(rob([2,7,9,3,1]))