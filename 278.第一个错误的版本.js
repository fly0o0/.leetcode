/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * 二分细节是魔鬼
 * 
 * 正确版本是在左侧，错误版本是在右侧，要找的是第一个左侧错误版本。
 * 
 * 场景一，遇到mid返回false，说明包括mid在内所有左侧的都是正确版本，所以left = mid + 1
 * 场景二，遇到mid返回true，说明mid右侧的都不是第一个错误版本（不包括当前），所以right = mid
 * 
 * 场景一：isBadVersion(mid) => false
 * 
 *  1 2 3 4 5 6 7 8 9
 *  G G G G G G B B B       G = 正确版本，B = 错误版本
 *  |       |       |
 * left    mid    right
 * 
 * 场景二：isBadVersion(mid) => true
 *
 * 1 2 3 4 5 6 7 8 9
 * G G G B B B B B B       G = 正确版本，B = 错误版本
 * |       |       |
 * left    mid    right
 *
 * * 
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1
        let right = n

        while (left <= right) {
            let mid = Math.floor((right + left) / 2)

            if (isBadVersion(mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        return left
    };
};
// @lc code=end

