    class Solution {
        /**
         * @param {number[]} nums
         * @param {number} target
         * @return {number}
         */
        search(nums, target) {

        let left = 0
        let right = nums.length - 1
        let mid = Math.floor(nums.length / 2)

        while (left <= right ) {
            mid = Math.floor((right + left)/ 2)

            if (nums[mid] > target) {
                right = mid - 1

            }

            if (nums[mid] < target) {
                left = mid + 1 
            }


            if (nums[mid] === target) return mid
        }

        return -1

        }
    }
