/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0
    let area = 0
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                
                area = 0
                sink(i, j)

                max = Math.max(area, max)
            }
        }
    }

    return max

    function sink(i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) return 0

        grid[i][j] = 0
        area++

        for (let k = 0; k < 4; k++) {
            const x = i + dx[k]
            const y = j + dy[k]

            sink(x, y)
        }
    }
};
// @lc code=end