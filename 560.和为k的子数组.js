/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * 也是看的题解..
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    if (nums == null) return 0
    let count = 0
    let prefixSum = 0

    let map = new Map()
    map.set(0, 1)

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i]

        let diff = prefixSum - k

        count += map.has(diff) ? map.get(diff) : 0

        map.has(prefixSum) ? map.set(prefixSum, map.get(prefixSum) + 1) : map.set(prefixSum, 1)
    }

    return count
};
// @lc code=end

