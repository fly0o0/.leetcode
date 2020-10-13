/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * 模拟数学中加法运算，从个十百千顺序进行计算
 * 
 * 本位等于进位加上当前位
 * 
 * 是否进位通过 “/10” 来判断
 * 
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 进位
    let carry = 0
    let n = digits.length

    // 加一
    digits[n - 1] = digits[n - 1] + 1

    for (let i = n - 1; i >= 0; i--) {
        // 当前位 = 进位 + 原当前位
        let sum = (carry + digits[i]) % 10
        // 进位判断，给下一位
        carry = Math.floor((carry + digits[i]) / 10)
        // 赋予当前位，新的值
        digits[i] = sum
    }
   
    // 面对[9]，[9, 9]这种情况，由于最终数组长度会比现在多一位
    if (carry === 1) {
        digits.unshift(1)
    }

    return digits
};
// @lc code=end

console.log(plusOne([9, 7]))