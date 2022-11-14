import './Post.css'

function Post({post, handleClick}) {
  return (
    <div className='post-container' data-testid="post" onClick={() => handleClick(post)} >
      <div className="post-title">
        <h3>{post.title}</h3>
      </div>
      <div className="post-body">
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default Post