import { expect } from "vitest";
import { render, screen } from "../../utils/test-utils";
import { BrowserRouter } from 'react-router-dom'
import Welcome from "./Welcome";

describe("CreatePost", () => {
  it("should render the CreatePost page", () => {
    render(
      <Welcome />, {wrapper: BrowserRouter}
    );
    expect(screen.getByText("Welcome")).toBeInTheDocument();
  });
});
