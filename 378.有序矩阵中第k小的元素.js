/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    // 二分法模版
    let row = matrix.length;
    let col = matrix[0].length
    let left = matrix[0][0]
    let right = matrix[row - 1][col - 1]

    while(left < right) {
        let mid = Math.floor(left + (right - left) / 2)

        // 找二维矩阵中<=mid的元素总个数
        let count = findNotBiggerThanMid(matrix, mid, row, col)

        if (count < k) {
            // 第k小的数在右半部分，且不包含mid
            left = mid + 1
        } else {
            // 第k小的数在左半部分，可能包含mid
            right = mid
        }
    }

    return left

    function findNotBiggerThanMid(matrix, mid, row, col) {
        // 以列为单位找，找到每一列最后一个<=mid的数即知道每一列有多少个数<=mid
        let i = row - 1
        let j = 0
        let count = 0
        while (i >= 0 && j < col) {
            // 第j列有i+1个元素<=mid
            if (matrix[i][j] <= mid) {
                count += i + 1
                j++
            } else {
                i--
            }
        }

        return count
    }

};
// @lc code=end

