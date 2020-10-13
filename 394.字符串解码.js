/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let stack = []

    let res = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            // 如果不是]都入栈
            stack.push(s[i])
        } else if (s[i] == ']') {
            // 获取[]中的字符串
            const tmp = []
            while (stack.lastIndexOf('[') !== stack.length - 1) {
                tmp.push(stack.pop())
            }

            // 去除最近一个[
            stack.pop()

            let count = []

            while (stack.length !== 0 && stack[stack.length - 1].match(/\d$/)) {
                count.push(stack.pop())
            }

            // 计算最近一个数值，因为不是个位数
            count = Number(count.reverse().join(''))

            // 进行repeat
            const repeatStr = Array(Number(count)).fill(tmp.reverse().join('')).join('')

            // 重新入栈
            stack.push(repeatStr)
        }
    }

    // 可能还没有清楚完成的，出栈
    while (stack.length !== 0) {
        res.push(stack.pop())
    }

    return res.reverse().join('')
};
// @lc code=end

console.log(decodeString('100[leetcode]'))