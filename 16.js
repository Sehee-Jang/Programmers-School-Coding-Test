/**
 * x만큼 간격이 있는 n개의 숫자
 * 
 * 문제 설명
    함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

    제한 조건
        x는 -10000000 이상, 10000000 이하인 정수입니다.
        n은 1000 이하인 자연수입니다.
   
        입출력 예
    x	n	answer
    2	5	[2,4,6,8,10]
    4	3	[4,8,12]
    -4	2	[-4, -8]
 */

// 시도 1
// function solution(x, n) {
//   var answer = [];
//   for (let i = x; i <= n; i++) {
//     console.log(i);  // 2, 3, 4, 5 반환
//   }
//   return answer;
// }

// 시도 2
// function solution(x, n) {
//   var answer = [];
//   for (let i = x; i <= x * n; i++) {
//     // x가 양수일 경우 x * n까지 증가하기 때문에 숫자가 너무 많이 생성됨
//     // x가 음수일 경우 i <= x * n 조건을 처음부터 만족하지 않을 수 있습니다.

//     answer.push(i);
//   }
//   return answer;
// }

// console.log(solution(2, 5));    // [2, 3, 4, 5, 6, 7, 8, 9, 10] 반환

// 시도 3
// function solution(x, n) {
//   var answer = [];
//   for (let i = x; i <= x * n; i += x) {
//     answer.push(i);
//   }
//   return answer;
// }
// console.log(solution(2, 5)); // [2, 4, 6, 8, 10];
// console.log(solution(4, 3)); // [4, 8, 12]
// console.log(solution(-4, 2)); // [] 반환

function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
