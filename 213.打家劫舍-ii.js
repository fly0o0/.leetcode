/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
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
    if(nums.length == 1) return nums[0]

    const start0 = myRob(nums.slice(0, nums.length - 1))
    const start1 = myRob(nums.slice(1, nums.length))

    return Math.max(start0, start1)

    function myRob (nums) {
        let n = nums.length

        let dp = []
        dp[0] = nums[0]
        dp[1] = Math.max(nums[1], nums[0])

        for (let i = 2; i < n; i++) {

            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
        }

        return dp[n - 1]
    }
};
// @lc code=end

console.log(rob([1,2,3,1]))