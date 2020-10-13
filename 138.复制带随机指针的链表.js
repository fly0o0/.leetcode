/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Defincurion for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return null

    let map = new Map()

    for (let cur = head; cur != null; cur = cur.next) {
        map.set(cur, new Node(cur.val))
    }

    for (let cur = head; cur != null; cur = cur.next) {
        map.get(cur).next = map.get(cur.next) || null

        map.get(cur).random = map.get(cur.random) || null
    }

    return map.get(head)
};
// @lc code=end

