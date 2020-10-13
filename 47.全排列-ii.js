/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * 思路：通过回溯法，不断递归，达到找到最终值
 * 
 * 已选路径（通过字符串表示，方便排重）
 * 候选列表（通过去除已选候选，把剩余的往下传递）
 * 
 * 最后还需要进行一个字符串转array的操作
 * 
 * 时间复杂度：待分析
 * 空间复杂度：待分析
 * 
 * 这个方法首先想到，但是效率不高。
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let ans = []

    backtrack('', nums)

    ans = ans.map(subArr => {
        return subArr.split(',').map(num => parseInt(num))
    })

    return ans

    function backtrack(track, candidates) {
        if (candidates.length === 0) {
            if (ans.includes(track)) return

            ans.push(track)
            return
        }

        for (let i = 0; i < candidates.length; i++) {
            const left = candidates.filter((item, index) => index != i)

            const pick = track === '' ? candidates[i] + '' : track + ',' + candidates[i]

            backtrack(pick, left)
        }
    }
};
// @lc code=end