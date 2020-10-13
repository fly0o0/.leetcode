/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * 思路：
 * 首先考虑到的是双重循环，暴力枚举法，
 * 固定一个数，把其他数轮训一遍，依次固定不同的数。
 * 
 * 但这题跟我们说已经是排序了的，所以怎么能利用这个点呢。
 * 其实可以通过低、高位指针，头尾指针相加如果大于target，
 * 说明最高位要变小一些，反之最低位要变大一些，直到找到相等的。
 * 
 * 时间复杂度：O（n），额外空间复杂度：O（1）
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let low = 0
    let high = numbers.length - 1

    while (low < high) {
        const sum = numbers[low] + numbers[high]

        if (target === sum) {
            return [low + 1, high + 1]
        } else if (target > sum) {
            low++
        } else {
            high--
        }
    }

    return [-1, -1]
};
// @lc code=end

