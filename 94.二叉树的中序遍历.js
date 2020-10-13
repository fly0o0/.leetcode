/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * 中序遍历是左 -> 根 ->  右
 * 1. 先保存左子🌲返回到数组
 * 2. 再把当前根节点保存在数组
 * 3. 再保存右子🌲返回到数组
 * 
 * 时间复杂度：O（N）
 * 空间复杂度：O (log N)
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if (!root) return []

    const left = inorderTraversal(root.left)

    const node = root.val

    const right = inorderTraversal(root.right)

    return [...left, node, ...right]
};

/**
 * 思路：
 * 不断先从上至下，压入左边的子🌲，从下至上打印根节点，并遍历右边的子🌲
 * 
 * 时间复杂度：O（N）
 * 空间复杂度：O（N）
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if (!root) return []

    let ans = []
    const stack = []
    let node = root

    while (node || stack.length) {
        // 只要node不为空，就存进stack
        // 不停的找左子节点
        while (node) {
            stack.push(node)
            node = node.left
        }

        // 如果左边子节点没了，就取栈顶的节点
        node = stack.pop()
        // 把根节点取出来后，打印一下
        ans.push(node.val)
        // 找当前节点的右节点
        node = node.right
    }

    return ans
};

/**
 * 思路：
 * 中序遍历的顺序是左 -> 根 -> 右
 * 
 * 刚好和栈的顺序是相反的，栈压入的顺序是右 -> 根 -> 左
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
            
            stack.push(node);  // 在左节点之前重新插入该节点，以便在左节点之后处理（访问值）
            stack.push(null); // null跟随node插入，标识已经访问过，还没有被处理

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

