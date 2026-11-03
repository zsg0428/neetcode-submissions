class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {

        const sorted = intervals.sort((a,b)=> a[0] -b[0])
        // console.log(sorted)
        const answer = [sorted[0]]


        for ( let i = 1 ; i < intervals.length; i++) {
            

           const current = sorted[i]
           const lastFromAnswer = answer[answer.length - 1]

        if ( current[0] === lastFromAnswer[0]) {

            if (current[1] >= lastFromAnswer[1]) {
                lastFromAnswer[1] = current[1]
            }
        } else  {
            if (current[0] <= lastFromAnswer[1]) {
                if (current[1] >= lastFromAnswer[1]) {
                    lastFromAnswer[1] = current[1]
                }
            } else {
                answer.push(current)
            }
        }



        }
        return answer
    }
}
