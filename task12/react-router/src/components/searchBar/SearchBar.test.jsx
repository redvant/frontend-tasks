import { expect, vi } from "vitest";
import { render, screen, userEvent } from "../../utils/test-utils";
import SearchBar from "./SearchBar";

describe("Search Bar", () => {
  it("should render the search bar", () => {
    render(<SearchBar handleChange={()=>{}} />);
    expect(screen.getByPlaceholderText('search')).toBeInTheDocument();
  });

  it("on value change, calls onChange each time", async () => {
    const onChange = vi.fn();
    render(<SearchBar handleChange={onChange} />);
    await userEvent.type(screen.getByPlaceholderText('search'), '123');
    expect(onChange).toBeCalledTimes(3);
  });
});
