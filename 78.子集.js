/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * 【思路】：
 * 遇到这种排列组合类的问题，首先就是想到回溯法。
 * 通过不断重复子问题（做选择），来到达跳出条件存储其一结果。
 * 而本题要保存所有可能都结果，不一定是多长。
 * 
 * 【时间复杂度】
 *  O(N) * (2^N)
 * 【空间复杂度】
 *  O(N) * (2^N)
 * 
 * 【回溯通用模版】：
 *  function backtrack(...):
 *   达到条件，记录入结果之一
 *   
 *   for 选择 in 选择列表:
 *       做选择
 *       backtrack(...，选择索引 + 1)
 *       撤销选择
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = []

    backtrack([], 0)

    return res

    /**
     * 回溯
     * 
     * @param {*} track 记录走过的路径
     * @param {*} start 可选择列表开始
     */
    function backtrack(track, start) {
        // 加入最终结果后，复制一份，保证不会受后续影响
        res.push(track.slice())
        
        // 可供选择的列表
        for (let i = start; i < nums.length; i++) {
            // 做选择
            track.push(nums[i])
            // 进行下一轮选择
            backtrack(track, i + 1)
            //撤销选择
            track.pop()
        }
    }
};
// @lc code=end

