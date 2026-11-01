    class Solution {
        /**
         * @param {string} s
         * @return {boolean}
         */
        isValid(s) {
            
            const map = new Map ([
                [")", "("], ["}","{"], ["]", "["]
            ])

            const stack = []

            for (const b of s) {
                
                if (map.has(b)) {
                    // check if last stack is eqaul to this b's map value
                    const lastStack = stack[stack.length - 1]
                    if (map.get(b) === lastStack) {
                        stack.pop()
                    } else return false
                    
                } else {
            // always only push opening parenthese
            // such as if b is ("]"), the push "[" to the stack
                    stack.push(b)
                }
            

            }
            
            return stack.length === 0

        }
    }
