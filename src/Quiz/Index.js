/**
 * 22강 코드 퀴즈. 요구사항
 * 체크박스 기능 추가
 * 1. 체크박스 체크 전엔 비활성
 * 2. 체크박스 활성화 => 버튼은 비활성화
 * fireEvenet.click
 * expect(button).toBeEnabled()
 * expect(button).toBeDisabled()
 * 체크박스가
 */

import React, { useState } from "react";

function Index() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor, color: "white" }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="enable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default Index;
