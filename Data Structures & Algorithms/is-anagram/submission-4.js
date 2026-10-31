class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false
         
        const countS = new Map()
        

        for (const letterS of s ) {
            countS.set(letterS, (countS.get(letterS) || 0) + 1)   
        }

        for (const letterT of t) {
            if (!countS.get(letterT) ) {
                return false
            }

            if (countS.get(letterT) && countS.get(letterT) !== 0) {
                countS.set(letterT, countS.get(letterT) - 1)
            }
        }
        return true
    


    }
}
