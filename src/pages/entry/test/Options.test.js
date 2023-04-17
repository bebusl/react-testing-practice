import { render, screen } from "@testing-library/react";
import Options from "../Options";

/**
 * 서버에서 반환하는 이미지를 잘 보여주는지만 테스트
 */

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  //find images
  //모든 이미지 이름은 scoop으로 끝나야 함
  // 이미지는 server에서 받아옴 => 비동기 => query도 비동기로 처리해주어야 함 => get/query대신 find를 써줘야 함
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //mutable 객체를 다룰 때는 toBe말고 toEqual사용해야 함
  const altText = scoopImages.map((element) => element.alt);
  //alt가 아래와 같아야 함.
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  // msw는 setupTests에서 설정해주고 있음.
});

test("displays image for each topping option from server", async () => {
  render(<Options optionType="toppings" />);
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);
});
