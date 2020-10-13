/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    
    const ans = []
    dfs(root, [], sum)
    return ans

    function dfs(root, path, sum) {
        if (!root) {
            return 0
        }
    
        sum = sum - root.val
        path.push(root.val)
    
        if (!root.left && !root.right) {
            if (sum == 0) {
                ans.push(path)
            }
            return
        }

        dfs(root.left, path.slice(), sum)
        dfs(root.right, path.slice(), sum)
    }
};
// @lc code=end

