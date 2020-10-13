/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function(nums, k) {
    // 从 nums 中取出前 k 个数，构建一个小顶堆
    let heap = [,], i = 0
    while(i < k) {
       heap.push(nums[i++]) 
    }
    buildHeap(heap, k)
    
    // 从 k 位开始遍历数组
    for(let i = k; i < nums.length; i++) {
        if(heap[1] < nums[i]) {
            // 替换并堆化
            heap[1] = nums[i]
            heapify(heap, k, 1)
        }
    }
    
    // 返回堆顶元素
    return heap[1]
};

// 原地建堆，从后往前，自上而下式建小顶堆
let buildHeap = (arr, k) => {
    if(k === 1) return
    // 从最后一个非叶子节点开始，自上而下式堆化
    for(let i = Math.floor(k/2); i >= 1 ; i--) {
        heapify(arr, k, i)
    }
}

// 堆化
let heapify = (arr, k, index) => {
    // 自上而下式堆化
    while(true) {
        let left = 2 * index
        let right = 2 * index + 1
        let minIndex = index
        if(left <= k && arr[left] < arr[minIndex]) {
            minIndex = left
        }
        if(right <= k && arr[right] < arr[minIndex]) {
            minIndex = right
        }
        if(minIndex !== index) {
            swap(arr, index, minIndex)
            index = minIndex
        } else {
            break
        }
    }
}

// 交换
let swap = (arr, i , j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
// @lc code=end

console.log(findKthLargest([3,2,3,1,2,4,5,0,6], 8))