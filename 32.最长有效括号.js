/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * 这道题确实难住了，参照物的方式第一次见。二刷再补，dp好难想到。
 * 
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let max = 0 
    const stack = [-1]
    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if (char === '(') {
            // 左括号的索引入栈 
            stack.push(i)
             // 跳过，考察下一个符号
            continue
        } 
        // 遇到右括号，栈顶出栈
        stack.pop()

        // 栈变空了，右括号匹配不到人了
        if (stack.length === 0) {
            // 说明它要充当“参照物”了
            stack.push(i)
            // 栈顶的一项“参照物”索引，作为新一轮有效括号的起点
        } else {
            // 右括号找到匹配，计算有效的连续长度，挑战最大
            max = Math.max(max, i - stack[stack.length - 1])
        }
    }
    return max
};
// @lc code=end

