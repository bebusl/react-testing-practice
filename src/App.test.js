import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

//test 상황
// 1. 카운터 초기 : 0
// 2. 마이너스 버튼이 올바른 텍스트를 렌더링하고 있는가
// 3. 플러스 버튼이 올바른 텍스트를 렌더링하고 있는가
// 4. +버튼을 누르면 카운터 숫자 1로 바뀜
// 5. -버튼 누르면 카운터 숫자 -1로 바뀜
// 6. on/off 버튼은 파란색인가?
// 7. on/off 버튼이 눌렸을 때 -,+버튼 disabled됐는지 확인
