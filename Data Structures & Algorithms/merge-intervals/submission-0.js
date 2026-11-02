class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {

        const sorted = intervals.sort((a,b) => a[0] - b[0])
        const arr = [sorted[0]]

        for (let i = 1; i < sorted.length; i++) {
            const lastOne = arr[arr.length - 1]

            // first digit and second digit of current array
            const first = sorted[i][0]
            const second = sorted[i][1]

            // compare current array first digital with last digit of last array
            if (first > lastOne[1] ) {
                arr.push(sorted[i])
            }

           
                
             else if (second > lastOne[1]) {
                    lastOne[1] =  second
                    
                }
            
        }

        return arr

    }
}
