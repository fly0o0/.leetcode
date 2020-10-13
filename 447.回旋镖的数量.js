/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 */

// @lc code=start
/**
 * 这道题连题目都理解了好久
 * 
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    if (!points || points.length <= 2) return 0

    let map = new Map()
    let ans = 0

    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j <points.length; j++) {

            let distance = calDistance(points[i], points[j])

            map.has(distance) ? map.set(distance, map.get(distance) + 1) : map.set(distance, 1)
        }

        for (let count of map.values()) {
            ans = ans + count * (count - 1)
        }
        map.clear()
    }

    return ans

    function calDistance(p1, p2) {
        let x = p1[0] - p2[0]

        let y = p1[1] - p2[1]

        return x * x + y * y
    }
};
// @lc code=end

