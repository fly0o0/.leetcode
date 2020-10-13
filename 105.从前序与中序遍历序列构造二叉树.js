/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * 思路：我们可以通过前序遍历得知root节点，通过root节点找到中序遍历的根index地址
 * 这样我们就能得到中序遍历的左右子树，根据中序遍历左右子树的长度又可以算出前序遍历左右子树
 * 
 * 发现子问题：函数接受前序遍历、中序遍历，返回一个构建好的树。
 * 
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) return null

    // 根据前序遍历找出当前树根节点
    let cur = preorder[0]
    // 找出在中序遍历中根节点的位置
    let index = inorder.indexOf(cur)
    let node = new TreeNode(cur)

    // 找出当前树的左子树中序遍历
    let leftInorder = inorder.slice(0, index)
    // 找出当前树的右子树中序遍历
    let rightInorder = inorder.slice(index + 1)

    // 找出当前树的左子树前序遍历
    let leftPreorder = preorder.slice(1, index + 1)
    // 找出当前树的右子树前序遍历
    let rightPreorder = preorder.slice(index + 1)

    // 递归函数作用：传入前序遍历、中序遍历，返回构建好的树
    let leftTree = buildTree(leftPreorder, leftInorder)
    let rightTree = buildTree(rightPreorder, rightInorder)

    node.left = leftTree
    node.right = rightTree

    return node
};
// @lc code=end

