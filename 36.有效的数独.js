/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * 没啥思路，看着题解写的
 * 
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    let cols = new Set()
    let rows = new Set()
    let chunks = new Set()

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j]

            if (num != '.') {
                const boxIndex = (parseInt(i / 3) * 3) + parseInt(j / 3)

                if (!rows.has(i + '-' + num)) {
                    rows.add(i + '-' + num)
                } else {
                    return false
                }

                if (!cols.has(j + '-' + num)) {
                    cols.add(j + '-' + num)
                } else {
                    return false
                }

                if (!chunks.has(boxIndex + '-' + num)) {
                    chunks.add(boxIndex + '-' + num)
                } else {
                    return false
                }
            }
        }
    }

    return true
};
// @lc code=end

