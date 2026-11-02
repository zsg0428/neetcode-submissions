class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

            const seen = new Map()

        for (let i = 0; i < nums.length; i++) {
            const current = nums[i]
            seen.set(current, (seen.get(current) || 0) + 1)
        }

        const seenArray = seen.entries()
        const sort = [...seenArray].sort((a,b)=> b[1]-a[1])
        const slice = sort.slice(0,k)
        const answer = slice.map(e => {
           return  e[0]
        })
        return answer
    }
}
