https://github.com/bonnie/udemy-TESTING-LIBRARY <강의 코드>

# logRoles
* RTL에서 테스트할 element 찾기 위해 권장하는 것 => getByRole을 사용하는 것
* role은 접근성을 위해 정의되어 있는 '역할'로, https://www.w3.org/TR/wai-aria/#role_definitions 에서 확인할 수 있다.
* 근데 위의 자료를 봐도 무슨 롤인지 모르겠다면?
  * logRoles를 적용하면 어떤 role을 갖는지 알 수 있다.
```
import {logRoles} from '@testing-library/dom'
import Component from "./components/a"
test("describe", () => {
    const {container} = render(<Component />)
    logRoles(container); // => test실행 시 엘레멘트의 role을 알려주는 코멘트가 출력됨

    } 
)

```