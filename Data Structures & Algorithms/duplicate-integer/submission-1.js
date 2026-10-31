class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const sortedArray = nums.sort((a,b)=> a-b )

        for (let i = 1; i < sortedArray.length; i++){
            if (sortedArray[i] === sortedArray[i-1]) { return true}
            
            
        }
        return false
    }
}
