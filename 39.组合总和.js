/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * 思路：通过回溯法，在候选数组里逐一挑选满足target的，不满足往回回溯
 * 
 * 时间复杂度：？
 * 空间复杂度：？
 * 在复杂度上犯了难
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans = []

    backtrace([], 0, 0)

    return ans

    function backtrace(pick, start, sum) {
        if (sum === target) {
            // .slice是避免持久化的数组还会被修改
            ans.push(pick.slice())
            return
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] + sum > target) continue

            pick.push(candidates[i])

            backtrace(pick, i, candidates[i] + sum)

            pick.pop()
        }
    }
};
// @lc code=end

