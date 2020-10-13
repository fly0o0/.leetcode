/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * 思路：
 * 
 * 与上一题是不能得排除重复的，一个元素只能用一次，所以每次选择后得把遍历索引加一，且需要排重
 * 
 * 通过回溯法，在候选数组里逐一挑选满足target的，不满足往回回溯
 * 
 * 
 * 时间复杂度：？
 * 空间复杂度：？
 * 在复杂度上犯了难
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let ans = []

    candidates.sort((a, b) => a - b)

    backtrace([], 0, 0)

    return ans

    function backtrace(pick, start, sum) {
        if (sum === target) {
            // .slice是避免持久化的数组还会被修改
            ans.push(pick.slice())
            return
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] + sum > target) break
            
            if (i > start && candidates[i] === candidates[i - 1]) continue

            pick.push(candidates[i])

            backtrace(pick, i + 1, candidates[i] + sum)

            pick.pop()
        }
    }
};
// @lc code=end

