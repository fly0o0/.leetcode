/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix || matrix.length == 0) return []
    let ans = []
    let top = 0
    let bottom = matrix.length - 1
    let right = matrix[0].length - 1
    let left = 0

    while(true) {
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i])
        }
        top++
        if (top > bottom) break

        for (let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right])
        }
        right--
        if (right < left) break

        for (let i = right; i >= left; i--) {
            ans.push(matrix[bottom][i])
        }
        bottom--
        if (top > bottom) break

        for (let i = bottom; i >= top; i--) {
            ans.push(matrix[i][left])
        }
        left++
        if (right < left) break
    }

    return ans
};
// @lc code=end

