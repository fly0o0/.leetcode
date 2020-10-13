/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let ans = 0
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                ans += sink(i, j)
            }
        }
    }

    return ans

    function sink(i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') return 0

        grid[i][j] = '0'

        for (let k = 0; k < 4; k++) {
            const x = i + dx[k]
            const y = j + dy[k]

            sink(x, y)
        }
        return 1
    }
};
// @lc code=end

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))
