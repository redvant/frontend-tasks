import { expect, vi } from "vitest";
import { render, screen, userEvent } from "../../utils/test-utils";
import Form from "./Form";

describe("Form", () => {
  const register = vi.fn();
  it("should render the Form", () => {
    const testInputs = [{ label: "Test", register }];
    render(
      <Form
        actionText="Create"
        inputs={testInputs}
        // submitData={()=>{}}
        // handleError={()=>{}}
        // onCancel={()=>{}}
      />
    );
    expect(screen.getByText("Create")).toBeInTheDocument();
  });

  it("on validation error, should call onError with errors", async () => {
    const testInputs = [
      {
        label: "Test",
        validations: { required: "Field is required" },
        register,
      },
    ];
    const onError = vi.fn();
    render(
      <Form actionText="Create" inputs={testInputs} handleError={onError} />
    );
    await userEvent.click(screen.getByText("Create"))
    expect(onError).toBeCalledTimes(1)
  });

  it("on valid submition, should call onSubmit with typed value", async () => {
    const testInputs = [
      {
        label: "Test",
        validations: { required: "Field is required" },
        register,
      },
    ];
    const stringToType = 'Test submition'
    const expectedSubmition = {"test": stringToType}
    const onSubmit = vi.fn();
    render(
      <Form actionText="Create" inputs={testInputs} submitData={onSubmit} />
    );
    await userEvent.type(screen.getByRole('textbox'), stringToType)
    await userEvent.click(screen.getByText("Create"))
    expect(onSubmit).toBeCalledTimes(1)
    expect(onSubmit).toBeCalledWith(expectedSubmition)
  });
});
