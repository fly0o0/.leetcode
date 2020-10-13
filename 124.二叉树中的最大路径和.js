/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * 居然忘了贴上来了
 * 
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = (root) => {
    let maxSum = Number.MIN_SAFE_INTEGER // 纪录保持者
    const dfs = (root) => {
        if (root == null) return 0 // 递归的出口
        const left = Math.max(0, dfs(root.left)) // 
        const right = Math.max(0, dfs(root.right))// 
        maxSum = Math.max(maxSum, left + root.val + right) //当前子树的maxSum挑战最大值
        return root.val + Math.max(left, right) // 向父节点提供的最大和，要包括自己
    }
    dfs(root) // 递归的入口
    return maxSum
}
// @lc code=end

