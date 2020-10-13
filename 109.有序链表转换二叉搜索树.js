/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    let n = 0
    let node = head

    while (head) {
        head = head.next
        n++
    }

    return inorder(0, n - 1)

    function inorder(left, right) {
        if (left > right) {
            return null
        }

        let mid = Math.floor((left + right) / 2)

        let leftChild = inorder(left, mid - 1)

        let father = new TreeNode(node.val)

        node = node.next

        father.left = leftChild
        father.right = inorder(mid + 1, right)

        return father
    }
};
// @lc code=end

