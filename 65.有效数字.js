/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    if (s == null || s.length == 0) {
        return false
    }
    //标记是否遇到相应情况
    let numSeen = false
    let dotSeen = false
    let eSeen = false 
    let str = s.trim()
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            numSeen = true;
        } else if (str[i] == '.') {
            // .之前不能出现.或者e
            if (dotSeen || eSeen) {
                return false
            }
            dotSeen = true;
        } else if (str[i] == 'e' || str[i] == 'E') {
            // e之前不能出现e，必须出现数
            if (eSeen || !numSeen) {
                return false
            }
            eSeen = true
            // 重置numSeen，排除123e或者123e+的情况,确保e之后也出现数
            numSeen = false
        } else if (str[i] == '-' || str[i] == '+') {
            // +-出现在0位置或者e/E的后面第一个位置才是合法的
            if (i != 0 && str[i - 1] != 'e' && str[i - 1] != 'E') {
                return false
            }
        } else {//其他不合法字符
            return false
        }
    }
    return numSeen
};
// @lc code=end

