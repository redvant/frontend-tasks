import { expect, vi } from 'vitest'
import { render, screen, userEvent } from '../../utils/test-utils'
import Post from './Post'

describe('Post', () => {
  it('should render the post', () => {
    const testPost = {id:1, title: "Test Post Title", body: "Test post body"}
    render(
      <Post post={testPost}/>
    )
    expect(screen.getByText(testPost.title)).toBeInTheDocument()
    expect(screen.getByText(testPost.body)).toBeInTheDocument()
  })

  it('when clicked, calls onClick with testPost', async () => {
    const testPost = {id:1, title: "Test Post Title", body: "Test post body"}
    const onClick = vi.fn()
    render(
      <Post post={testPost} handleClick={onClick}/>
    )
    await userEvent.click(screen.getByTestId('post'))
    expect(onClick).toBeCalledTimes(1)
    expect(onClick).toBeCalledWith(testPost)
  })
 })