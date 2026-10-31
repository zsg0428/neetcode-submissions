class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
     const setNum = new Set(nums)
     const setNumArr = [...setNum]
     if (nums.length > setNumArr.length) return true 
     else return false 
    }
}
