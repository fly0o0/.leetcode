/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let word = ''
    for (const letter of s.trim()) {
        if (letter === ' ') {
            word = '' //重置
            continue
        }

        word = word + letter
    }

    return word.length
};

var lengthOfLastWord = function(s) {
    if (s == '') return 0

    let count = 0
    for (let i = s.length - 1; i >= 0; i--) {
        const letter = s[i]
        if (letter === ' ') {
            if (count === 0) {
                continue
            } else {
                break
            }
        }

       count++
    }

    return count
};
// @lc code=end

console.log(lengthOfLastWord('Hello World'))