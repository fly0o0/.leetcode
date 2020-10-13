/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * 去找那个你，去试试走走你走过的路。
 * 
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    let me = headA
    let you = headB
    
    while(me != you) {

        me = me ? me.next : headB

        you = you ? you.next : headA
    }

    return you
};
// @lc code=end

