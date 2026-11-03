class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {


        const seen = new Map()
        const sorted = strs.map((e)=> {
            return e.split("").sort().join("")
        })

        // console.log(sorted)

        for (let i = 0; i < strs.length; i++) {

            const label = sorted[i]
            if (!seen.has(label)) {
                seen.set(label, [])
            }

            seen.get(label).push(strs[i])

        }
        console.log("seen===>", seen)
        return [...seen.values()]
    }
}
