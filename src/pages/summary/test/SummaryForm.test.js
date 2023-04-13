import { render, fireEvent, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("disalbed button before check agreement checkbox", () => {
  render(<SummaryForm />);

  const button = screen.getByRole("button", { name: "Confirm order" });
  const agreementCheckbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });

  //before click checkbox
  expect(button).toBeDisabled();
  expect(agreementCheckbox).not.toBeChecked();

  // agreement checkbox click
  fireEvent.click(agreementCheckbox);

  expect(button).toBeEnabled();
});

test("popover responds to hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const popover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(popover).not.toBeInTheDocument();
  //시작할 땐 팝오버 안보임

  const termsAndConditions = screen.getByText(/terms and conditions/i);
  //사용자 이벤트가 완료되기 전 단언 실행시키기 싫으면 꼭 await를 적어주세요
  await user.hover(termsAndConditions);
  const popover2 = screen.getByText(/no ice cream will actually be delivered/i);

  expect(popover2).toBeInTheDocument();
  // Checkbox Label에 마우스를 올리면 팝오버가 나타남

  await user.unhover(termsAndConditions);
  expect(popover2).not.toBeInTheDocument();
  // 마우스가 나가면 다시 팝오버가 사라짐
});
