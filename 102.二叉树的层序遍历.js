/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * 思路：
 * 通过一个level值来辨识当前第几层
 * 
 * 时间复杂度：O（N）
 * 空间复杂度：O (log N)
 * 
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const ans = []

    dfs(root, 0)

    return ans

    function dfs(root, level) {
        if (!root) return []

        dfs(root.left, level + 1)
        dfs(root.right, level + 1)

        ans[level] = ans[level] || []

        ans[level].push(root.val)
    }
};

/**
 * 思路：
 * 通过一个队列保存节点，因此第一层由于第二层先处理
 * 每一层要单独近一个for循环来处理完成后，再进入下一层。
 * 
 * 时间复杂度：O（N）
 * 空间复杂度：O（N）
 * 
 * @param {*} root 
 */
var levelOrder = function (root) {
    if (!root) return []
    const queue = [root]
    const ans = []

    while (queue.length !== 0) {
        let curLevel = []

        for (let len = queue.length; len > 0; len--) {
            let node = queue.shift()

            curLevel.push(node.val)

            node.left && queue.push(node.left)

            node.right && queue.push(node.right)
        }

        ans.push(curLevel)
    }

    return ans
};
// @lc code=end

