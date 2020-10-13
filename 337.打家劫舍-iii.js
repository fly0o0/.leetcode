/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
   let res = dp(root)

    return Math.max(res[0], res[1])
};

/* 
    返回一个大小为 2 的数组 arr
    arr[0] 表示不抢 root 的话，得到的最大钱数
    arr[1] 表示抢 root 的话，得到的最大钱数 
*/
function dp(root) {
    if (root == null)
    return  [0,0]

    let left = dp(root.left)
    let right = dp(root.right)

    // 抢，下家就不能抢了
    let rob = root.val + left[0] + right[0]
    let noRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1])

    return [noRob, rob]
}
// @lc code=end

