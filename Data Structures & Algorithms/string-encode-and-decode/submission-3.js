class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const newStrs = strs.map(str => {
            return `${str.length}#${str}`
        }).join('')
        console.log(newStrs)
        return newStrs
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let newArr = []
        let i = 0
        while (i < str.length) {
            let j = i 
            while (str[j] !== '#') {
                j++
            }

            // find the number (length)
            const length = parseInt(str.slice(i,j), 10 )

            // find the word
            const word = str.slice(j + 1, j + length + 1)

            newArr.push(word)
            console.log(newArr)
            i =  j + length + 1
        }
        return newArr
    }
}
