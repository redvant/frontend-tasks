import { expect } from "vitest";
import { render, screen, userEvent } from "../../utils/test-utils";
import { waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CreatePost from "./CreatePost";

describe("CreatePost", () => {
  it("should render the CreatePost page", () => {
    render(
      <CreatePost />, {wrapper: BrowserRouter}
    );
    expect(screen.getByText("Create Post")).toBeInTheDocument();
  });

  it("should show success alert when submitData is successful", async () => {
    render(
      <CreatePost />, {wrapper: BrowserRouter}
    );
    await userEvent.type(screen.getByRole('textbox'), "Test title")
    await userEvent.type(screen.getByRole('textarea'), "Test body")
    await userEvent.click(screen.getByRole('button', {
      name: /Create/i
    }))
    await waitFor(() => expect(screen.getByText("Post created successfully")).toBeInTheDocument())
  });

  it("should show error alert when submitData fails", async () => {
    render(
      <CreatePost />, {wrapper: BrowserRouter}
    );
    await userEvent.type(screen.getByRole('textbox'), "Test error")
    await userEvent.type(screen.getByRole('textarea'), "Test body")
    await userEvent.click(screen.getByRole('button', {
      name: /Create/i
    }))
    await waitFor(() => expect(screen.getByText("There was an error creating the post")).toBeInTheDocument())
  });

  it("should show error alert for validation errors", async () => {
    render(
      <CreatePost />, {wrapper: BrowserRouter}
    );
    await userEvent.type(screen.getByRole('textarea'), "Test body")
    await userEvent.click(screen.getByRole('button', {
      name: /Create/i
    }))
    await waitFor(() => expect(screen.getByText("Error in title: Field is required")).toBeInTheDocument())
  });

  it("an alert should disapper after 3 seconds", async () => {
    render(
      <CreatePost />, {wrapper: BrowserRouter}
    );
    await userEvent.type(screen.getByRole('textarea'), "Test body")
    await userEvent.click(screen.getByRole('button', {
      name: /Create/i
    }))
    await waitFor(() => expect(screen.getByText("Error in title: Field is required")).toBeInTheDocument())
    await waitFor(() => expect(screen.queryByText("Error in title: Field is required")).toBeNull(), {timeout: 3000})
  });

  // it("on Cancel, should redirect to posts", async () => {
  //   render(
  //     <CreatePost />, {wrapper: BrowserRouter}
  //   );
  //   await userEvent.click(screen.getByRole('button', {
  //     name: /Cancel/i
  //   }))
  // });
});
