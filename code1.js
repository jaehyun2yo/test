//예산
function solution(d, budget) {
  let answer = 0;
  let arr = d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (budget >= arr[i]) {
      budget -= arr[i];
      console.log(budget);
      answer++;
    }
  }
  return answer;
}

console.log(solution([2, 2, 3, 3], 10));

// 다른사람 풀이

function solution_1(d, budget) {
  let answer = 0;
  let money = 0;
  d.sort((a, b) => a - b).forEach((vla) => {
    money += vla;
    if (money <= budget) {
      answer++;
    }
  });
  return answer;
}
