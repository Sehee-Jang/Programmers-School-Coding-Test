/**
 * 하샤드 수
 *
 * 문제 설명
    양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

    제한 조건
        x는 1 이상, 10000 이하인 정수입니다.
    
    입출력 예
        x	return
        10	true
        12	true
        11	false
        13	false

    입출력 예 #1
        10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.

    입출력 예 #2
        12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.

    입출력 예 #3
        11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.

    입출력 예 #4
        13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.
 */

// 접근 방법:
// (1) 숫자를 문자열로 분리한다.
// (2) 문자열을 자리수마다 나눈다.
// (3) 나눈 문자열의 자리수 합을 구한다.
// (4) 원래의 수와 (3)을 나눈다.
// (5) 나누어 떨어지면 true 그렇지 않으면 false 리턴

function solution(x) {
  //   var answer = true;
  let sumOfDigit = 0;
  // (1) 숫자를 문자열로 변환하여 각 자릿수 분리
  const digits = x.toString().split("");
  //   console.log(digits); // [ '1', '8' ]

  // (2) 분리된 자리 수의 합
  for (i = 0; i < digits.length; i++) {
    const digit = parseInt(digits[i]); //digits의 i번째 요소에 접근
    sumOfDigit += digit;
  }

  // (3)  원래의 수와 나눈다.
  // x를 sumOfDigit로 나눈 값의 나머지가 0과 일치할 때 true 반환
  if (x % sumOfDigit === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(solution(18)); // true
console.log(solution(10)); // true
console.log(solution(12)); // true
console.log(solution(11)); // false
console.log(solution(13)); // false
