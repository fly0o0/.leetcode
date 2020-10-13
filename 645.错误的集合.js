/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * 思路： 
 * 
 * 先遍历一遍记录所有数字及次数，记录在map
 * 然后再遍历一遍正确的数组，找到map里没有的那个就是缺失的
 * map里有两个的，就是多复制的
 * 
 * 时间复杂度：
 * O（n）
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let map = new Map()

    for (let v of nums) {
        map.has(v) ? map.set(v, map.get(v) + 1) : map.set(v, 1)
    }

    let dup = -1
    let mis = -1
    for (let i = 1; i <= nums.length; i++) {
        if (map.has(i)) {
            if (map.get(i) == 2) {
                dup = i
            }
        } else {
            mis = i
        }
    }

    return [dup, mis]
};
// @lc code=end

