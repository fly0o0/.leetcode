/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {

    let dic = new Array(26).fill(0)
    for (let c of s1) {
        const code = c.charCodeAt() - 97
        dic[code]++
    }

    let start = 0, end = 0
    
    while (end < s2.length) {
        const code = s2[end].charCodeAt() - 97
        // 入窗
        dic[code]--

        // 出窗
        while (dic[code] < 0) {
            dic[s2[start].charCodeAt() - 97]++
            start++
        }

        // 如果此时出现全部符合同时长度与s1相同的子串，则查找成功
        if (end - start + 1 === s1.length) return true

        end++
    }

    return false
};
// @lc code=end

console.log(checkInclusion('ab', 'eidboaoo'))