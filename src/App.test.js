import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

//test 상황
// 1. 카운터 초기 : 0
/**
 *  test("어떤 테스트인지 설명", () =>{
 *      render(<TestComponent />) //가상 돔에 렌더링됨
 *      const element = screen.getByTestId("id로 요소 특정")
 *      expect(내가 테스트할 요소).matcher(expectedValue);
 * })
 * 이런 식으로 사용. describe안에 여러 test를 넣을 수 있음. 관련있는 테스트를 묶을 때 describe안에 쓴다고 생각하면 될 듯.
 */

test("the counter starts at 0", () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter"); // data-testId에 넣어둔거
  expect(counterElement).toHaveTextContent(0);
});

// 2. 마이너스 버튼이 올바른 텍스트를 렌더링하고 있는가

test("minus button should showing -", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(minusButtonElement).toHaveTextContent("-");
});
// 3. 플러스 버튼이 올바른 텍스트를 렌더링하고 있는가

test("plus button should showing +", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toHaveTextContent("+");
});
// 4. +버튼을 누르면 카운터 숫자 1로 바뀜

test("click + button then counter setting 1", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
  fireEvent.click(plusButtonElement); // 클릭 이벤트 발생
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});
// 5. -버튼 누르면 카운터 숫자 -1로 바뀜
test("click - button then counter setting 1", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");
  fireEvent.click(minusButtonElement); // 클릭 이벤트 발생
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});
// 6. on/off 버튼은 파란색인가?
test("on/off button is blue", () => {
  render(<App />);
  const onOffButton = screen.getByTestId("on/off-button");
  expect(onOffButton).toHaveStyle({ backgroundColor: "blue" });
});
// 7. on/off 버튼이 눌렸을 때 -,+버튼 disabled됐는지 확인
test("when on/off Button Clicked, disabled -/+ button", () => {
  render(<App />);
  const onOffButton = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButton);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
});

// describe문은 테스트를 그룹으로 묶음
describe("spaces beforecamel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letter", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
