class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const seen = new Map()
       

            for (const s of strs) {

                const sortedS = s.split("").sort()

                const label = sortedS.join("")
           
            if (!seen.has(label)) {
                seen.set(label,[])
               
            }

            seen.get(label).push(s)
            
    
        }

return [...seen.values()]

    }
}
