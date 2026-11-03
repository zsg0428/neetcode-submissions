class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const seen = new Map()

        for (let i = 0; i < nums.length; i++) {

            let diff = target - nums[i]

            if (seen.has(diff)) {

                

                return [Math.min(i, seen.get(diff)), Math.max(i, seen.get(diff))]
            }

            seen.set(nums[i], i)

        }
        return []
   
    }
}
