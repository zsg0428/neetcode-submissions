class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        const cleanedS = s.trim().toLowerCase().split("")
        

        const isAlnum = (letter) => {
            return (letter >= "a" && letter <= "z") || (letter >= "0" && letter <= "9") 
        }

      const arrayOne = []
      const arrayTwo = []

      for (let i =0; i < cleanedS.length; i++) {
        if (isAlnum(cleanedS[i])) {
            arrayOne.push(cleanedS[i])
        }
      }

      for (let i = cleanedS.length; i >= 0; i--) {
        if (isAlnum(cleanedS[i])) {
            arrayTwo.push(cleanedS[i])
        }
      }


      console.log(arrayOne, arrayTwo)

      return arrayOne.join("") === arrayTwo.join("")


        
    }
}
