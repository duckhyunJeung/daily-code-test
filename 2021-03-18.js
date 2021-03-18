function solution(s) {
    let answer;
    answer = s.split(' ').map(str => {
        return str.split('').map((val, index) => {
          return index % 2 === 0 ?  val.toUpperCase() : val.toLowerCase();
        }).join('');
    }).join(' ');
    return answer;
}