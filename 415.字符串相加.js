/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let len1 = num1.length
    let len2 = num2.length
    let carry = 0
    let ans = ''
    let i = len1 - 1
    let j = len2 - 1

    while (i >= 0 || j >= 0) {
        let n1 = parseInt(num1[i] ? num1[i]: 0)
        let n2 = parseInt(num2[j] ? num2[j]: 0)

        let tmp = carry + n1 + n2
        let count = tmp % 10
        carry = parseInt( tmp / 10)
        ans = count + ans

        i--
        j--
    }

    if (carry === 1) {
        ans = 1 + ans
    }

    return ans
};
// @lc code=end

console.log(addStrings('9', '99'))