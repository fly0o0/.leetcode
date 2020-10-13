/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = new Map()
    const ans = []
    
    for (const n1 of nums1) {
        let found = map.get(n1)
        found ? map.set(n1, ++found) : map.set(n1, 1)
    }

    for (const n2 of nums2) {
        let found = map.get(n2)

        if (found != null && found != 0) {
            map.set(n2, --found)
            ans.push(n2)
        }
    }

    return ans
};
// @lc code=end

