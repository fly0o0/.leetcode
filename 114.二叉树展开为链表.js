/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 逆前序解法
 * 
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let last
    
    rightDfs(root)

    return last

    function rightDfs(root) {
        if (!root) {
            return 
        }
        // 找到最右边的节点
        rightDfs(root.right) 
        rightDfs(root.left)
      
        // 左子节点已经被遍历到，去除
        root.left = null
        // 把上一个节点添加到当前节点的右边
        root.right = last
        // 把当前节点赋值给last，待下次使用
        last = root
    }
};


var flatten = function(root) {
    while(root) {
        if(!root.left) {
            root = root.right;
        } else {
            let temp = root.left;
            // 找到左节点的最右树节点
            while(temp.right) temp = temp.right;
            // 将树的右节点接在左节点的最右树节点上
            temp.right = root.right;
            // 右节点替换为左节点
            root.right = root.left;
            // 左节点的值置为null
            root.left = null;
            // 开始下一次遍历
            root = root.right; 
        }
    }
};



// @lc code=end

