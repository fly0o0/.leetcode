/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let ans = ''

    for (const s of str) {        
        if (s.charCodeAt() >= 'A'.charCodeAt() && s.charCodeAt() <= 'Z'.charCodeAt()) {
            const diff = 'a'.charCodeAt() - 'A'.charCodeAt()
            const lower = String.fromCharCode(s.charCodeAt() + diff)
            ans = ans + lower
        } else {
            ans = ans + s
        }
    }

    return ans
};
// @lc code=end

console.log(toLowerCase('X'))