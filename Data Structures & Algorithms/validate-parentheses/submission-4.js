class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const bMap = new Map ([
            [")", "("], ["}", "{"], ["]", "["]
        ])

        const answer = []

        for (let i = 0; i < s.length; i++) {

            if (bMap.has(s[i])) {
                if (bMap.get(s[i]) === answer[ answer.length -1]) {
                    answer.pop()
                } else {
                    return false
                }

            } else {
                answer.push(s[i])
            }

        }

     console.log(answer)
    return answer.length === 0

        // return true / false
    }
}
