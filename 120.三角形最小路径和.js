/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let dp = triangle

    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            dp[i][j] += Math.min(dp[i + 1][j], dp[i + 1][j + 1]) 
        }
    }

    return dp[0][0]
};
// @lc code=end

console.log(minimumTotal([
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
]))

