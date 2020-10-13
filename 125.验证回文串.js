/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0
    let right = s.length - 1
    while (left < right) {

        if (!isalnum(s[left])) {
            left++
            continue
        }

        if (!isalnum(s[right])) {
            right--
            continue
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false
        }

        left++
        right--
    }

    return true

    function isalnum(s) {
        return s.match(/[A-Za-z0-9]/)
    }
};
// @lc code=end

console.log(isPalindrome("a."))