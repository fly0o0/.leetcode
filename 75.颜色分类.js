/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * 思路：
 * 先通过计数，计算0，1，2各有多少个
 * 
 * 然后遍历计数存的数组，然后把0，1，2各赋值到原数组
 * 
 * 
 * 时间复杂度：O（n）
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const counts = [0, 0, 0]

    for (let i = 0; i < nums.length; i++) {
        counts[nums[i]]++
    }

    // 原数组的index
    let index = 0
    for (let c = 0; c < counts.length; ) {
       
        if (counts[c] === 0) {
           // 只有对应的元素0，1，2个数0后，才进行下一个元素的遍历
           c++
        } else {
            // 把元素0，1，2赋值给原数组
            nums[index] = c
            // 更新原数组的index
            index++
            // 对于计数的数组元素含有的个数减一
            counts[c]--
        }
    }

};

/**
 * 思路：
 * Dijstra提出的三色旗问题
 * 
 * 通过三个指针，p0，p2，curr来进行区分
 * 
 * 把0全部放到左边，2全部放到右边，剩下的中间就是1了
 * 
 * 
 * 时间复杂度：O（n）
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let n = nums.length
    // 0的右边界
    let r0 = 0
    // 2的左边界
    let l2 = n - 1
    // 当前遍历
    let curr = 0

    while (curr <= l2) {
        if (nums[curr] === 0) {
            [nums[curr], nums[r0]] = [nums[r0], nums[curr]]
            r0++
            curr++
        } else if (nums[curr] === 2) {
            [nums[curr], nums[l2]] = [nums[l2], nums[curr]]
            l2--
        } else {
            curr++
        }
    }
};

// @lc code=end