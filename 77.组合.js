/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * 思路：https://mp.weixin.qq.com/s/pL-Hyl42PmZqt1oujflJEA
 * 
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = []

    function helper(start, prev) {
        if (prev.length === k) {
            ans.push(prev)
        }

        for (let i = start; i <= n; i++) {
            helper(i + 1, prev.concat(i))
        }
    }

    helper(1, [])

    return ans
};
// @lc code=end

