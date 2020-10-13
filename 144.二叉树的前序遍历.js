/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * 前序遍历是根 -> 左 -> 右
 * 1. 先把当前根节点保存在数组
 * 2. 再保存左子🌲返回到数组
 * 3. 再保存右子🌲返回到数组
 * 
 * 时间复杂度：O（N）
 * 空间复杂度：O (log N)
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (!root) {
        return []
    }

    let l = preorderTraversal(root.left)

    let r = preorderTraversal(root.right)

    return [root.val, ...l, ...r]
};

/**
 * 思路：简单迭代
 * 
 * 时间复杂度：O（N）
 * 空间复杂度：O（N）
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (!root) return []

    const ans = []
    const stack = [root]

    while (stack.length !== 0) {
        node = stack.pop()

        if (!node) continue

        ans.push(node.val)

        stack.push(node.right, node.left)
    }

    return ans
};

/**
 * 思路：
 * 遍历的顺序是根 -> 左 -> 右
 * 刚好和栈的顺序是相反的，栈压入的顺序是右 -> 左 -> 根
 * 
 * ref：https://leetcode-cn.com/problems/binary-tree-preorder-traversal/solution/miao-sha-quan-chang-ba-hou-lang-by-sonp/
 * 
 * 时间复杂度：O（N）
 * 空间复杂度：O（N）
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (!root) return []

    const ans = []
    const stack = [root]

    while (stack.length !== 0) {
        let node = stack.pop()

        if (node) {
            // 右节点先压栈，最后处理
            node.right && stack.push(node.right)  
            node.left && stack.push(node.left)
            // 当前节点重新压栈（留着以后处理），因为先序遍历所以最后压栈
            stack.push(node)
            // 在当前节点之前加入一个空节点表示已经访问过了
            stack.push(null)
            // 空节点表示之前已经访问过了，现在需要处理除了递归之外的内容
        } else {
            // 取出根节点，然后放入结果
            ans.push(stack.pop().val)  
        }
    }

    return ans
};
// @lc code=end

