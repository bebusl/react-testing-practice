import { render, screen } from "@testing-library/react";
import Options from "../Options";

/**
 * 서버에서 반환하는 이미지를 잘 보여주는지만 테스트
 */

test("displays image for each scoop option from server", () => {
  render(<Options optionType="scoops" />);

  //find images
  //모든 이미지 이름은 scoop으로 끝나야 함
  const scoopImages = screen.getAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //mutable 객체를 다룰 때는 toBe말고 toEqual사용해야 함
  const altText = scoopImages.map((element) => element.alt);
  //alt가 아래와 같아야 함.
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  // msw는 setupTests에서 설정해주고 있음.
});
