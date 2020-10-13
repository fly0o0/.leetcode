/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let ans = []
    if (!s || s.length === 0 || s.length > 12 || s.length < 4) {
        return ans
    }

    backtrack([], 0)

    return ans

    function isVaild(sub) {
        let m = sub.length

        if (m > 3) {
            return false
        }
        if (m == '' || m == null) {
            return false
        }

        return sub.startsWith('0') ? (m == 1) : (Number(sub) <= 255)
    }

    function backtrack(arr, begin) {
        // 添加ans
        if (arr.length === 4) {
            if (begin === s.length) {
                ans.push(arr.join('.'))
                return ans
            }

        }

        // select list
        for (let i = 0; i <= 3; i++) {
            // 如果超出了长度限制，则跳出
            if (begin + i > s.length) {
                break
            }

            let sub = s.substring(begin, begin + i)

            // bad case
            if (!isVaild(sub)) {
                continue
            }

            // 符合要求就加入到 arr 数组中
            arr.push(sub)
            // 继续递归遍历下一个位置
            backtrack(arr, begin + i)
            // 回退到上一个元素，即回溯
            arr.pop()
        }
    }
};
// @lc code=end

console.log(restoreIpAddresses("25525511135"))

