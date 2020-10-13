/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set = new Set()
    const ans = []
    
    for (const n1 of nums1) {
        set.add(n1)
    }

    for (const n2 of nums2) {
        if (set.has(n2)) {
            set.delete(n2)
            ans.push(n2)
        }
    }

    return ans
};
// @lc code=end

