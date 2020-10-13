/*
 * @lc app=leetcode.cn id=149 lang=javascript
 *
 * [149] 直线上最多的点数
 */

// @lc code=start
/**
 * 看着题解才做出的，需再练习。
 * 
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    if (points == null)
        return -1

    if (points.length <= 1)
        return points.length

    const map = new Map()
    let res = 0

    for (let i = 0; i < points.length; i++) {
        let same = 1

        for (let j = 0; j < points.length; j++) {
            if (i == j) continue

            let x = points[i][0] - points[j][0]
            let y = points[i][1] - points[j][1]

            if (x == 0 && y == 0) {
                same++
                continue
            }

            let g = gcd(x, y)
            let key = x / g + "-" + y / g

            map.has(key) ? map.set(key, map.get(key) + 1) : map.set(key, 1)
        }

        if (map.size == 0)
            res = Math.max(res, same);
        else {
            for (const val of map.values())
                res = Math.max(res, val + same);
        }
        map.clear()
    }

    return res

    function gcd(x, y) {
        if (y === 0) {
            return x
        }

        return gcd(y, x % y)
    }
};
// @lc code=end

