/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * 思路：先算当前数左边，再算当前数右边，积为左边乘以右边
 * 
 * 输入：[1, 2, 3, 4]
 * 输出：左边[ 1, 1, 2, 6 ] * 右边[ 24, 12, 4, 1 ] = [ 24, 12, 8, 6 ]
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let ans = []
    let k = 1
    let len = nums.length

    for (let i = 0; i < len; i++) {
        ans[i] = k
        // 此时数组存储的是，当前元素的左边所有元素乘积
        k *= nums[i] 
    }

    k = 1
    for (let i = len - 1; i >= 0; i--) {
        // 左边*右边
        ans[i] *= k 
        // 此时数组存储的是，当前元素的右边所有元素乘积
        k *= nums[i]
    }

    return ans
};
// @lc code=end