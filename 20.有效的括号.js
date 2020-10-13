/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * 用括号匹配，使用map作为map，匹配对应的括号，
 * 左边括号入栈，遇到右边括号出栈，
 * 判断stack最终长度是不是0
 * 
 * 时间复杂度：O（n）
 * 空间复杂度：O（n）
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let dic = {'{': '}', '[': ']', '(': ')'}
    
    let stack = []

    for (let c of s) {
        if (dic[c]) {
            stack.push(c)
        } else {
            if (dic[stack.pop()] !== c) {
                return false
            }
        }
    }

    return stack.length === 0
};
// @lc code=end

console.log(isValid('{{{{}}}}'))