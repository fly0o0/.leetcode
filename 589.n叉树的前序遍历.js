/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let ans = []
   
    dfs(root)

    return ans
    
    function dfs(root) {
        if (!root) return null

        ans.push(root.val)

        root.children.forEach((node) => {
            dfs(node)
        })
    }
};
// @lc code=end

