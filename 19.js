/**
 * 정수 제곱근 판별

 * 문제 설명
    임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
    n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

  제한 사항
    n은 1이상, 50000000000000 이하인 양의 정수입니다.

  입출력 예
    n	return
    121	144
    3	-1


  입출력 예#1
    121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.
  
    입출력 예#2
    3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.
 */

function solution(n) {
  if (n < 0) return -1; // 1 이하의 값은 양의 정수가 아님

  // 1.n이 어떤 양의 정수 x의 제곱인지 아닌지 구하기
  sqrt = Math.sqrt(n);

  // 2. sqrt가 정수인지 확인 (n을 1로 나눈 나머지가 0이면 정수)
  if (sqrt % 1 === 0) {
    // n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴
    return (sqrt + 1) * (sqrt + 1);
  } else {
    return (x = -1); // n이 양의 정수 x의 제곱이 아니라면 -1을 리턴
  }
}

console.log(solution(121));
console.log(solution(3));
console.log(solution(-3));

// 문제 접근 방법
// 1. n의 제곱근을 구한 뒤, 그 값이 정수인지 확인
// 2. n이 어떤 정수 x의 제곱이라면 그 다음수인 x+1을 반환
// 2. n이 어떤 정수의 x 제곱이 아니라면 -1을 반환

// 예시를 통해 이해하기
// n = 16인 경우:
// √16 = 4 (정수입니다.)
// 그러므로 4+1 = 5이고, 5의 제곱인 25를 반환합니다.
// n = 15인 경우:
// √15는 정수가 아니므로, -1을 반환합니다.
