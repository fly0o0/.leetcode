/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */

/**
 * 思路：
 * 后序遍历是左 -> 右 -> 根
 * 1. 先保存左子🌲返回到数组
 * 2. 再保存右子🌲返回到数组
 * 3. 再把当前根节点保存在数组
 * 
 * 时间复杂度：O（N）
 * 空间复杂度：O (log N)
 * @param {*} root 
 */
var postorderTraversal = function (root) {
    if (!root) return []

    let left = postorderTraversal(root.left)

    let right = postorderTraversal(root.right)

    return [...left, ...right, root.val]
};

/**
 * 思路：
 * 后序遍历顺序是左 -> 右 -> 根
 * 
 * 其实可以看作是根 -> 右 -> 左的逆序
 * 
 * 时间复杂度：O（N）
 * 空间复杂度：O（N）
 * 
 * @param {*} root 
 */
var postorderTraversal = function (root) {
    const stack = [root]
    const ans = []
    let node = null

    while (stack.length !== 0) {
        node = stack.pop()

        if (!node) continue

        stack.push(node.left, node.right)

        ans.push(node.val)
    }

    return ans.reverse()
};

/**
 * 思路：
 * 遍历的顺序是左 -> 右 -> 根
 * 刚好和栈的顺序是相反的，栈压入的顺序是根 -> 右 -> 左
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
            // 在右节点之前重新插入该节点，以便在最后处理（访问值）
            stack.push(node)
            // null跟随node插入，标识已经访问过，还没有被处理
            stack.push(null)

            // 右节点先压栈，最后处理
            node.right && stack.push(node.right)
            node.left && stack.push(node.left)

            // 空节点表示之前已经访问过了，现在需要处理除了递归之外的内容
        } else {
            // 取出根节点，然后放入结果
            ans.push(stack.pop().val)
        }
    }

    return ans
};

// @lc code=end

