/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    let ans = []

    dfs(root)

    return ans

    function dfs(root) {
        if (!root) return null
        root.children.forEach(item => {
            dfs(item)
        })

        ans.push(root.val)
    }
};
// @lc code=end

