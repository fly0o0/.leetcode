/*
 * @lc app=leetcode.cn id=1319 lang=javascript
 *
 * [1319] 连通网络的操作次数
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
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    const cables = connections.length
    if (cables < n - 1) return -1

    const uf = new UF(n)
    for (let c of connections) {
        uf.union(c[0], c[1])
    }
    return uf.size() - 1
};
// @lc code=end

