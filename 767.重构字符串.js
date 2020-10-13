/*
 * @lc app=leetcode.cn id=767 lang=javascript
 *
 * [767] 重构字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    let len = S.length
    if (len === 1) return S

    let arr = new Array(26).fill(0)
    let maxLength = 0
    for (let letter of S) {
        const diff = letter.charCodeAt() - 'a'.charCodeAt()
        arr[diff]++
        if (maxLength < arr[diff]) {
            maxLength = arr[diff]
        }
    }

    if (maxLength > (len + 1) / 2) return ''

    const ans = new Array(len)
    let odd = 1
    let even = 0

    for (let i = 0; i < 26; i++) {
        while(arr[i] > 0 && arr[i] < Math.floor(len / 2) + 1 && odd < len) {
            const letter = String.fromCharCode('a'.charCodeAt() + i)
            ans[odd] = letter
            arr[i]--
            odd += 2
        }

        while(arr[i] > 0) {
            const letter = String.fromCharCode('a'.charCodeAt() + i)
            ans[even] = letter
            arr[i]--
            even += 2
        }
    }

    return ans.join('')
    
};
// @lc code=end

