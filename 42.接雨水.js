/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * 暴力法
 * 思路：其实所有能接住的水的面积，等于每列上能接住的水。
 * 而每列能存多少水是根据左右两边最高（又要以其最低的来计算）的列围成的，
 * 所以每列能存多少水就是左右两边最低者减去当前列高度。
 * 
 * 时间复杂度：
 * O（n^2）
 * 
 * @param {number[]} height
 * @return {number}
 */
var trap = function (heights) {
    let water = 0
    for (let i = 1; i < heights.length - 1; i++) {
        const maxL = findMax(heights, 0, i - 1)
        const maxR = findMax(heights, i + 1, heights.length - 1)

        const unit = Math.min(maxL, maxR) - heights[i]
        water += unit > 0 ? unit : 0
    }

    return water

    function findMax(heights, start, end) {
        let max = 0
        for (let i = start; i <= end; i++) {
            heights[i] > max && (max = heights[i])
        }
        return max
    }
};

/**
 * 双数组
 * 
 * 思路：通过一层遍历先计算好左右最大值，由于要计算0到i，
 * i到len-1不同i下的最大值，所以借助数组来保存
 * 
 * 时间复杂度：
 * O（n）
 * 
 * @param {number[]} height
 * @return {number}
 */
var trap = function (heights) {
    const len = heights.length
    const maxL = Array(len).fill(0)
    const maxR = Array(len).fill(0)

    maxL[0] = heights[0]
    for (let i = 1; i < len; i++) {
        maxL[i] = Math.max(maxL[i - 1], heights[i])
    }

    maxR[len - 1] = heights[len - 1]
    for (let i = len - 2; i > 0; i--) {
        maxR[i] = Math.max(maxR[i + 1], heights[i])
    }

    let water = 0
    for (let i = 1; i < heights.length - 1; i++) {
        const unit = Math.min(maxL[i], maxR[i]) - heights[i]
        water += unit > 0 ? unit : 0
    }

    return water
};

/**
 * 双指针
 * 
 * 思路：其实通过左右指针可达到双数组的效果，我们也只关心左右两边最短者
 * 
 * 时间复杂度：
 * O（n）
 * 
 * @param {number[]} height
 * @return {number}
 */
var trap = function (heights) {
    let water = 0
    let right = heights.length - 1
    let left = 0
    let maxLeft = 0
    let maxRight = 0

    while(left <= right) {
        maxLeft = Math.max(heights[left], maxLeft)
        maxRight = Math.max(heights[right], maxRight)

        if (maxLeft < maxRight) {
            water += maxLeft - heights[left] 
            left++
        } else {
            water += maxRight - heights[right]
            right--
        }
    }

    return water
};


// @lc code=end

