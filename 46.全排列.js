/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []

    backtrack([])

    return res

    /**
     * 
     * 路径：记录在 track 中
     * 选择列表：nums 中不存在于 track 的那些元素
     * 结束条件：nums 中的元素全都在 track 中出现
     * @param {*} track 记录「路径」
     */
    function backtrack(track) {
        // 触发结束条件
        if (track.length === nums.length) {
            res.push(track.slice())
            return
        }

        for (let i = 0; i < nums.length; i++) {
            // 排除不合法的选择
            if (track.includes(nums[i])) {
                continue
            }
            // 做选择
            track.push(nums[i])
            // 进入下一层决策树
            backtrack(track)
            // 取消选择
            track.pop()
        }
    }
};
// @lc code=end

console.log(permute([1,2,3]))