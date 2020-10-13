/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * 利用hash表来存储异位词数量
 * 
 * 通过固定滑动窗口来逐步判断是否当前子字符串等于匹配字符串
 * 
 * 时间复杂度：O（n）
 * 空间复杂度：O（1）
 * 
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let ans = []
    let dict = {}
    for (const letter of p) {
        dict[letter] = dict[letter] ? dict[letter] + 1 : 1
    }

    let start = 0
    let end = 0
    let count = {}
    while (end < p.length) {
        const letter = s[end]
        count[letter] = count[letter] ? count[letter] + 1 : 1
        end++
    }

    if (isSame(dict, count)) ans.push(start)

    end = p.length - 1
    while (end < s.length) {
        count[s[start]]--
        start++
        end++
        const last = s[end]
        count[last] = count[last] ? count[last] + 1 : 1
        if (isSame(dict, count)) ans.push(start)
    }

    return ans

    function isSame(a, b) {
        for (let letter in a) {
            if (a[letter] !== b[letter]) return false
        }
        return true
    }
};
// @lc code=end

console.log(findAnagrams("bpaa", "aa"))