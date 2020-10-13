/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()
    
    for (let word of strs) {
        const wordKey = wordToString(word)

        if (map.has(wordKey)) {
            map.get(wordKey).push(word)
        } else {
            map.set(wordKey, [word])
        }
    }

    return Array.from(map.values())

    // 把单词转换成 转成 0#2#2# 类似的形式
    function wordToString(word) {
        let nums = new Array(26).fill(0)

        for (let i = 0; i < word.length; i++) {
            const alphaNum = word.charCodeAt(i) - 'a'.charCodeAt()
            nums[alphaNum]++
        }

        return nums.join('#')
    }
};
// @lc code=end