# screen Query Methods
* screen에서 element를 찾는 methods의 타입

* 기본형태
    ```**[comment]**/**[All]**/By**[QueryType]**```

## comment - get/query/find

  * get : element가 DOM에 **있다고** 예상할 떄. 쿼리에 맞는 노드를 반환. 쿼리에 맞는 노드가 없으면 **에러**를 반환
  * query: element가 DOM에 **없다고** 예상할 떄. 쿼리에 맞는 노드 있으면 그거 반환하고 없으면 **null**을 반환
  * find : element가 비동기적으로 나타날 떄
    * DOM에 비동기적인 업데이트가 있고, expect문 실행 전엥(단언) element를 기다릴 떄 필요

## All - 조건에 부합하면 다 가져올까?
* All을 쿼리에 포함X : 조건에 부합하는 element가 하나일 때 사용. 걔만 반환
* All을 쿼리에 포함 : 조건에 부합하는 element를 Array에 넣어서 반환

### 어떤 쿼리를 써야 할 지 모르겠다면, cheatsheet 참고

## QueryType - 식별 조건
1. Role : WAI-ARIA role로 찾음
2. AltText : image를 찾을 때 AltText를 통해 찾을 수 있음
3. Text : 화면에 있는 element면, text를 통해 찾을 수 있음
4. Form elements -> Form 요소들은 아래 값들로도 찾을 수 있음
   *  PlaceholderText
   *  LabelText
   *  DisplayValue

> QueryType에는 우선순위가 정해져있다.
> Web accessibility를 잘 지켰다 -> 어떤 기기에서든 잘 동작한다/반응한다.
> 1순위. 어떤 기기에서건 접근 가능한 쿼리 == getByRole > getByLabelText > getByPlaceholderText > getByText > getByDisplayValue
> 2순위. Semantic Queries, 브라우저와 보조 기술의 사이 일관성이 떨어져서 1순위보다 비선호됨 === getByAltText(alt text를 가지고 있는 요소에만 사용 가능) > getByTitle(얘는 screenreader에서 꼭 읽히는 게 아님 -> 우선순위 낮음)
> 그다음은 Test Id를 부여하고 그 TestId를 통해 찾는 것


## 예시
```
findByRole(~~)
getAllByAltText(~~)
```



### reference
* https://testing-library.com/docs/queries/about/
* https://testing-library.com/docs/react-testing-library/cheatsheet/
* https://testing-library.com/docs/queries/about/#priority