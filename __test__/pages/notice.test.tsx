import { render, screen } from "@testing-library/react";
import Notice from "@/pages/notice";
import "@testing-library/jest-dom";
import React from "react";

describe("Notice", () => {
  it("renders a heading tag", () => {
    render(<Notice />);

    const heading = screen.getByRole("heading");
    const headingText = "Notice";
    expect(heading).toHaveTextContent(headingText);
  });
});
