# fireEvent
* fireEvent.click() : 클릭 행위
* DOM 이벤트를 디스패치
  
# userEvent
* fireEvent보다는 userEvent 사용을 권장
* 사용자 이벤트를 시뮬레이션
* fireEvent보다 완전하고 현실적
* 모든 상호작용을 시뮬레이팅함 => 여러개의 이벤트를 발생시키고, 도중에 추가 검사를 수행할 수 있음
* **주의! 늘 Promise를 반환하므로 비동기 처리를 해주어야 함**
```
 const user = userEvent.setup() <= 이 셋업으로 시작함


 await user.keyboard('[ShiftLeft>])
 await user.click(element)
```

# fireEvent와 userEvent의 차이점