/*
 * @lc app=leetcode.cn id=1456 lang=javascript
 *
 * [1456] 定长子串中元音的最大数目
 */

// @lc code=start
/**
 * 固定窗口往右边移动，每次左指针和右指针移动一进行max比较
 * 
 * 时间复杂度：O（n）
 * 空间复杂度：O（1）
 * 
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let left = 0
    let right = 0
    let count = 0

    // 先计算[0, k）的字符串
    while (right < k) {
        vowels.has(s[right]) && count++
        right++
    }

    let max = count

    // 每次往右边移动一格子，计算有多少个元音
    while (right < s.length) {
        vowels.has(s[right]) && count++
        vowels.has(s[left]) && count--

        left++
        right++

        max = Math.max(max, count)
    }

    return max
};
// @lc code=end

