# MSW

## 왜 사용하나요?
* 네트워크 호출을 interceptgka
* 특정 responses를 반환함
* 왜? 테스트하는 동안에 실제 서버에 요청하는 건 낭비잖아


## 그냥 Jest의 mocking을 쓰면 안되나요?
axios 모킹에 MSW를 사용하는 이유는 여러 가지입니다.

이 앱의 경우 동시에 두 가지를 요청(옵션 페이지에서 스쿱과 토핑)하는데, 모킹 반환값으로는 이를 관리하기 어려울 뿐만 아니라 불안정합니다. 페이지를 다시 정렬하면 모의 화면에서 반환값의 순서가 잘못되어 테스트가 실패할 수도 있습니다.

요청의 POST 데이터 등에 따라 값을 반환하고 싶을 수 있습니다. MSW라면 핸들러 함수로 가능합니다.

MSW는 쿠키, 이진 응답(예: 이미지) 등 요청의 정교한 측면을 처리할 수 있습니다.

서버 요청 시 사용할 메소드를 바꿀 수 있고, MSW는 어떤 메소드를 사용하든 작동합니다.



## setup
1. handler 작성 => mocking response
   * REST API 응답 -> req, res, ctx가 파라미터
   * GRAPHQL 응답
2. server 작성 => node환경, browser환경에서 동작하는 테스트서버 생성
   test 진행 중에 mock server가 계속 켜져있는지도 체크
   각 테스트 후에는 server를 reset. 전 test에 영향을 받으면 안됨.

3. CRA사용할 경우 -> setupTests에서 server listen/close/reset 해주는 걸 등록해 줌