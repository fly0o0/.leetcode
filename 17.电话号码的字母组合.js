/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === '') {
        return []
    }
    let res = []
    let map = [0, 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

    backtrack([], 0)

    return res

    /**
     * 回溯
     * 
     * @param {*} track 记录走过的路径
     * @param {*} index 可选择列表开始
     */
    function backtrack(track, index) {
        // 触发结束条件
        if (index === digits.length) {
            res.push(track.join(''))
            return
        }

        const letters = map[digits[index]]

        for (let i = 0; i < letters.length; i++) {
            // 做选择
            track.push(letters[i])
            // 进入下一层决策树
            backtrack(track.slice(), index + 1)
            // 取消选择
            track.pop()
        }
    }
};
// @lc code=end

console.log(letterCombinations(''))
