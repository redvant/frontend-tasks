import { expect } from "vitest";
import { render, screen, userEvent } from "../../utils/test-utils";
import { waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Posts from "./Posts";
import {posts as fetchedPosts } from '../../mocks/handlers'

describe("Posts", () => {
  it("should render the Posts page", () => {
    render(
      <Posts />, {wrapper: BrowserRouter}
    );
    expect(screen.getByText("Posts")).toBeInTheDocument();
  });

  it("should show all the fetched Posts", async () => {
    render(
      <Posts />, {wrapper: BrowserRouter}
    );
    fetchedPosts.forEach(async post => {
      await waitFor(() => expect(screen.getByText(post.title)).toBeInTheDocument())
    });
  });

  it("should show the Details Modal when clicking a post", async () => {
    render(
      <Posts />, {wrapper: BrowserRouter}
    );
    await waitFor(() => expect(screen.getByText(fetchedPosts[0].title)).toBeInTheDocument())
    await userEvent.click(screen.getByText(fetchedPosts[0].title))
    await waitFor(() => expect(screen.getByTestId("detailsModal")).toBeInTheDocument())
  });

  it("should remove post from list when deleted successfully", async () => {
    render(
      <Posts />, {wrapper: BrowserRouter}
    );
    await waitFor(() => expect(screen.getByText(fetchedPosts[0].title)).toBeInTheDocument())
    await userEvent.click(screen.getByText(fetchedPosts[0].title))
    await userEvent.click(screen.getByText('Delete'))
    await waitFor(() => expect(screen.queryByText(fetchedPosts[0].title)).toBeNull())
  });

  it("should show success alert when delete is successful", async () => {
    render(
      <Posts />, {wrapper: BrowserRouter}
    );
    await waitFor(() => expect(screen.getByText(fetchedPosts[0].title)).toBeInTheDocument())
    await userEvent.click(screen.getByText(fetchedPosts[0].title))
    await userEvent.click(screen.getByText('Delete'))
    await waitFor(() => expect(screen.getByText("Post deleted successfully")).toBeInTheDocument())
  });

  it("should not remove post from list when delete fails", async () => {
    render(
      <Posts />, {wrapper: BrowserRouter}
    );
    await waitFor(() => expect(screen.getByText(fetchedPosts[1].title)).toBeInTheDocument())
    await userEvent.click(screen.getByText(fetchedPosts[1].title))
    await userEvent.click(screen.getByText('Delete'))
    await waitFor(() => expect(screen.queryByText(fetchedPosts[1].title)).toBeInTheDocument())
  });

  it("should show success error when delete fails", async () => {
    render(
      <Posts />, {wrapper: BrowserRouter}
    );
    await waitFor(() => expect(screen.getByText(fetchedPosts[1].title)).toBeInTheDocument())
    await userEvent.click(screen.getByText(fetchedPosts[1].title))
    await userEvent.click(screen.getByText('Delete'))
    await waitFor(() => expect(screen.getByText("There was an error deleting the post")).toBeInTheDocument())
  });

  it("should remove the post from list when don't match search pattern", async () => {
    render(
      <Posts />, {wrapper: BrowserRouter}
    );
    await waitFor(() => expect(screen.getByText(fetchedPosts[0].title)).toBeInTheDocument())
    await userEvent.type(screen.getByPlaceholderText('search'), '1')
    expect(screen.queryByText(fetchedPosts[1].title)).toBeNull()
    expect(screen.queryByText(fetchedPosts[2].title)).toBeNull()
  });

  it("should return posts to list when search box is cleared", async () => {
    render(
      <Posts />, {wrapper: BrowserRouter}
    );
    await waitFor(() => expect(screen.getByText(fetchedPosts[0].title)).toBeInTheDocument())
    await userEvent.type(screen.getByPlaceholderText('search'), '1')
    await userEvent.type(screen.getByPlaceholderText('search'), "{backspace}")
    expect(screen.queryByText(fetchedPosts[1].title)).toBeInTheDocument()
    expect(screen.queryByText(fetchedPosts[2].title)).toBeInTheDocument()
  });
});
