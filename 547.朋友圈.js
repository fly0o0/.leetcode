/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start

class UF {
    constructor(size) {
        this.parents = new Array(size).fill(0).map((_, i) => i)
        this.count = size
    }

    size() {
        return this.count
    }

    find(x) {
        while (this.parents[x] != x) {
            x = this.parents[x]
        }
        return x
    }

    union(x, y) {
        const rootx = this.find(x)
        const rooty = this.find(y)

        if (rootx === rooty) return
        this.parents[rootx] = rooty

        this.count--
    }
}
/**
 * 模仿的小漾，第一次写并查集，先占个位置
 * 
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
    const len = M.length
    const uf = new UF(len)

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (M[i][j] === 1) {
               uf.union(i, j)
            }
        }
    }

    return uf.size()
};
// @lc code=end