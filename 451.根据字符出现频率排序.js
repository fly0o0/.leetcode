/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    // 统计每个字母出现的次数
    const map = {}
    for (const letter of s) {
        map[letter] ? map[letter]++ : map[letter] = 1
    }

    // 用数组存储，索引代表次数，元素代表对应次数的字母列表
    const arr = []
    for (const key in map) {
        const val = map[key]
        !arr[val] ? arr[val] = [key] : arr[val].push(key)
    }

    // 根据出现的次数，遍历数组，把每种次数的打印一遍
    const strs = []
    for (let count = arr.length - 1; count > 0; count--) {
        arr[count] && arr[count].forEach(item => strs.push(item.repeat(count)))
    }
    return strs.join('');
};
// @lc code=end
console.log(frequencySort('tree'))
