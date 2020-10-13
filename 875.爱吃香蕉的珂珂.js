/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * 此题分析是看题解，待后面回顾
 * 
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {

    let left = 0
    let right = Math.max(...piles)
    let mid = 0

    let min = Number.MAX_SAFE_INTEGER

    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2)

        if (isEatAll(piles, H, mid)) {
            min = mid

            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return min
    
    function isEatAll(piles, H, K) {
        let times = 0
        piles.forEach(p => {
            times += Math.ceil(p / K)
        })

        return times <= H
    }
};
// @lc code=end

