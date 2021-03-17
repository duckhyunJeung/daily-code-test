const min = 0;
const max = 3000;

function solution(n) {
    var answer = 0;
    if(n >= min && n <= max) {
        for(let i=1; i<= n; i++) {
            if(n%i == 0) {
                answer += i;
            }       
        }
    }
    return answer;
}