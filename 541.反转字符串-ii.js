/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const arr = [...s]

    for (let i = 0; i < arr.length; i += 2 * k) {
        
        j = Math.min(i + k - 1, arr.length - 1)

        reverse(arr, i, j)
    }

    return arr.join('')
};

function reverse (arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
}
// @lc code=end
