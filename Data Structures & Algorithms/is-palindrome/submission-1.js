class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanedS = s.toLowerCase().split("")
        const isAlnum = (l) => {
            return (l >= "a" && l<="z") || (l >= "0" && l <= "9")
        }

        let left = 0
        let right = cleanedS.length -1 

        while ( left < right) {
            if(!isAlnum(cleanedS[left])) {
                left++
                continue
            }

             if(!isAlnum(cleanedS[right])) {
                right--
                continue
            }

        if(cleanedS[left] !== cleanedS[right]) return false

        left++
        right--
        
      
         
        }
  return true
 
    }
}
