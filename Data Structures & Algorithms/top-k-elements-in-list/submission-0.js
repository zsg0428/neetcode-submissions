class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = {}
      
        // store everything in hashmap and count
        for (let i = 0; i < nums.length; i++) {
           hashMap[nums[i]] ?  hashMap[nums[i]] = hashMap[nums[i]] + 1 :  hashMap[nums[i]] = 1
        }

        // find the top k frequent numbers
        
        let array = []
        for (const [key, value] of Object.entries(hashMap)) {
            array.push({key, value})
        }

        // sort top array
        
        array.sort ((a,b) => b.value - a.value)
        const newArr = array.slice(0,k)

       const answer =  newArr.map (arr => {
            return +arr.key
        })

        // take top k value out 

        return answer


        console.log('array:', array)
        console.log('new array:', newArr)
        console.log('answer', answer)
        
        console.log('hashMap:',hashMap)
    }
}
