/**
 * 자연수 뒤집어 배열로 만들기
 * 
    문제 설명
        자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

    제한 조건
        n은 10,000,000,000이하인 자연수입니다.
    
    입출력 예
        n	return
        12345	[5,4,3,2,1]
 */

function solution(n) {
  let answer = [];
  // 1. 숫자를 문자열로 변환하고 배열로 나눈다. split사용
  let strArray = n.toString().split("");
  // 2. 문자열을 뒤집는다
  let reversedArray = strArray.reverse();
  // 3. 문자를 숫자로 변환
  answer = reversedArray.map(function (str) {
    return parseInt(str, 10);
  });

  return answer;
}

console.log(solution(12345));
