class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {



        const clean = s.toLowerCase()

        const isAlnum = (c)=> {
            return (c >= "0" && c <= "9") || (c >="a" && c<= "z")
        }

       let left = 0 
       let right = s.length - 1

        while (left < right) {

            

           if (!isAlnum(clean[left])) {
            left++
            continue
           }

           if (!isAlnum(clean[right])) {
            right--
            continue
           }

            if (clean[right] === clean[left]) {
                left++
                right--
                continue
            } else {
                return false
            }



        }

        return true
    }
}
