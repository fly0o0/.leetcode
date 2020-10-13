/*
 * @lc app=leetcode.cn id=1054 lang=javascript
 *
 * [1054] 距离相等的条形码
 */

// @lc code=start
/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
    let len = barcodes.length;

    // 1.统计每个数字出现的次数
    let map = new Map();
    for (let v of barcodes) {
        if (!map.has(v)) {
            map.set(v, 1);
        }
        else {
            map.set(v, map.get(v) + 1);
        }
    }

    let arr = [];
    for (const [k, v] of map) {
        arr.push({ val: k, count: v });
    }

    // 2.按照出现次数降序排序，出现次数最多的元素在前
    arr.sort((a, b) => {
        return b.count - a.count
    });

    // 3.从奇数位置开始填充，也即是 0 2 4 6 8 ... 
    //   这里不要混，因为索引 0 是第一个位置，也就是从索引 0 开始
    // 4.填充完奇数位置，填充偶数位置
    // 5.填完为止

    const ans = new Array(len)
    let even = 0, // 索引 0 2 4 6 ...
        odd = 1; // 索引 1 3 5 7 ...
    for (const el of arr) {
        while (el.count > 0) {
            if (even < len) {
                ans[even] = el.val;
                el.count--;
                even += 2;
            }
            else {
                ans[odd] = el.val;
                el.count--;
                odd += 2;
            }

        }
    }

    return ans;
};
// @lc code=end

console.log(rearrangeBarcodes([1, 1, 1, 1, 2, 2, 3, 3]))

