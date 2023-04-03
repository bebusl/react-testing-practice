# Unit test

* 컴포넌트로부터 함수를 분리하는 경우
  * 여러 컴포넌트에서 공유하는 함수의 경우
  * 복잡한 로직을 가진 함수의 경우

* 이럴 때 유닛테스트 하세요
  * Functional test로는(기능이 의도한대로 잘 동작하는지~만 체크) 테스트하기 힘들 떄
  * 너무 많은 edge case가 있을 떄 
  * Functional test가 실패하는 원인을 찾기 위해
    * 만약 함수를 리팩토링 했다고 치자, 늘 통과하던 Functional Test에 실패한다.
    * => 이 때 에러의 원인을 찾기 위해 리팩토링한 함수를 유닛 테스트해서 원인을 찾는다!

* describe로 연관된 테스트를 묶어보세요
  * if. 파스칼 케이스로 입력한 색상의 이름을 인수로 받는다. 함수는 대문자가 있다면 앞에 공백을 넣어서 반환한다.
  * test case 1. 대문자가 맨 첫글자에만 있을때(ex. Red)
  * test case 2. 대문자가 글자 사이에 하나 있을 떄 (ex. MidnightBlue)
  * test case 3. 대문자가 글자 사이에 여러개 있을 떄 (ex. MidVioletRed)
  * => 세 케이스 모두 함수가 잘 동작하냐에 대한 것 . describe로 묶어 주자.
  ```describe("전체적인 테스트에 대한 설명", ()=>{
        test('describe test1', ()=>{ /*assertion*/})
        test('describe test2', ()=>{ /*assertion*/})
        test('describe test3', ()=>{ /*assertion*/})
  })

  ```