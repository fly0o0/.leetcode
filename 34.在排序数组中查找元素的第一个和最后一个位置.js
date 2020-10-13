/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let len = nums.length
    let l = 0, r = len - 1
    while (l <= r) {
      let mid = (l + r) >> 1
      if (target > nums[mid]) {
        l = mid + 1
      } else if (target < nums[mid]) {
        r = mid - 1
      } else {
        l = r = mid
        while (nums[l] === nums[l - 1]) l--
        while (nums[r] === nums[r + 1]) r++
        return [l, r]
      }
    }
    return [-1, -1]  
};

function findLeft(nums, target) {
  let left = 0;
  let right = nums.length - 1

  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] == target) {
      right = mid - 1
    }

    if (nums[mid] > target) {
      right = mid - 1
    }

    if (nums[mid] < target) {
      left = mid + 1
    }
  }

  if (left > nums.length - 1 || nums[left] !== target) return -1

  return left
}

function findRight(nums, target) {
  let left = 0
  let right = nums.length - 1

  while(left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] == target) {
      left = mid + 1
    }

    if (nums[mid] < target) {
      left = mid + 1
    }

    if (nums[mid] > target) {
      right = mid - 1
    }
  }
  if (right < 0 || nums[right] !== target) return -1

  return right
}

var searchRange = function (nums, target) {
  let left = findLeft(nums, target)
  let right = findRight(nums, target)

  return [left, right]
};
// @lc code=end

